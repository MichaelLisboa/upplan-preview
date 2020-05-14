import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Layout from "../Layout";
import { getLandingPostBySlug } from '../../lib/contentful';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import HeroDefault from "../Hero/HeroDefault";
import HeroImage from "../Hero/HeroImage";
import HeroVideo from "../Hero/HeroVideo";
import EmbedVideo from "../Hero/EmbedVideo";
import { BenefitsTwoCol, BenefitsGrid } from "../Benefits";
import { LogoGrid, LogoCarousel } from "../LogoCollection";
import Testimonials from "../Testimonials";

import style from "../../styles/Landing.module.css";

const LandingDetailContent = ({...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState({})

    useEffect(
        () => {
            getLandingPostBySlug(props.match.params.slug)
                .then(response => {
                    setPage(response.items[0].fields)
                    setIsLoading(false);
                })
        }, []
    )

    if (isLoading) return <div />;

    const {
        conversionUrl,
        desktopOffer,
        videoPath,
        benefitsHeadline,
        benefitsSection,
        customSection,
        description,
        heroCtaComponent,
        logo,
        logoCollection,
        metaDescription,
        metaKeywords,
        pageIdentifier,
        pageName,
        stackedSections
    } = page;

    console.log(logoCollection)

    const headerData = {
        template: heroCtaComponent.fields.templateLayout || "",
        heroCTA: heroCtaComponent.fields || "",
        ctaUrl: conversionUrl ? conversionUrl : "https://account.upplan.sg/register",
        leader: heroCtaComponent.fields.subHeadline ? heroCtaComponent.fields.subHeadline.content.map(copy => copy.content) : "",
        offer: desktopOffer || "",
        mediaLink: videoPath || "",
    }

    const loadHero = hero => {
        console.log(hero.template)
        switch(hero.template) {
            case "Hero Image":
                return <HeroImage data={hero} />
            case "Hero Video":
                return <HeroVideo data={hero} />
            case "Embed Video":
                return <EmbedVideo data={hero} />
            default:
                return <HeroDefault data={hero} />
        }
    }

    const textAlign = pos => {
        switch(pos) {
            case "Text Left":
                return "uk-flex-first@s";
            case "Text Right":
                return null;
            default:
                return "uk-flex-first@s";
        }
    }

    const customColor = color => {
        switch(color) {
            case "LightGrey":
                return "uk-background-muted-light";
            case "Grey":
                return "uk-background-secondary uk-light";
            case "Blue":
                return "uk-background-blue uk-light";
            case "Purple":
                return "uk-background-primary uk-light";
            default:
                return "uk-background-default";
        }
    }

    return (
        <Layout>
        <div className={`${style.landingWrapper}`}>
        {loadHero(headerData)}

        {stackedSections &&
        <section className="uk-section uk-section-large">
            <div className="uk-container uk-container-small uk-margin-large">
                {benefitsHeadline.length && <h2 className={`${style.titleCenter} uk-margin-large-left uk-margin-large-right uk-text-center`}>{benefitsHeadline}</h2>}
            </div>
            <BenefitsTwoCol sections={stackedSections} />
        </section>
        }

        {benefitsSection &&
        <section className="uk-section uk-section-large uk-padding-remove-top">
            <BenefitsGrid benefits={benefitsSection} />
        </section>
        }

        {customSection && customSection.length &&
            customSection.map((section, i) =>
            <section key={section.fields.sectionId} className={`${style.customSection} uk-section uk-section-small ${customColor(section.fields.sectionColor)}`}>
                <div className="uk-container">
                    <div className="uk-margin-large-top uk-margin-large-bottom">
                        <div className="uk-grid uk-grid-large uk-flex-middle uk-child-width-1-2@s" data-uk-grid>
                            <div className={`${textAlign(section.fields.sectionAlignment)}`} data-uk-margin>
                                <h2>{section.fields.sectionTitle}</h2>
                                <div className="custom-section-copy" dangerouslySetInnerHTML={{ __html: section.fields.sectionCopy }} />
                            </div>
                            <div className="uk-flex-first" data-uk-margin>
                                <img
                                    src={section.fields.sectionMedia.fields.file.url}
                                    alt={section.fields.sectionTitle}
                                    data-uk-img
                                     />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        }

        {logoCollection && logoCollection.length &&
            <section className="logo-grid uk-section uk-section-large">
                {logoCollection.map((c, i) => {
                    const collection = c.fields;
                    console.log(collection)
                    return (
                        collection.displayType === 'grid' ? <LogoGrid key={`logo-grid-${i}`} items={collection} /> : <LogoCarousel key={`logo-carousel-${i}`} items={collection} />
                    )
                })
                }
            </section>
        }

        </div>
        </Layout>
    );
};

export default LandingDetailContent;

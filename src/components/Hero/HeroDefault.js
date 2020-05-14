import React from "react";
import Img from "gatsby-image";
import style from "./Hero.module.css";
import { Video } from "../Video";

const HeroDefault = ({data}) => {
    // const leader = data.heroCTA.subHeadline.content.map(copy => copy.content);
    const offer = data.heroCTA.desktopOffer;

    return (
        <section className="hero-default uk-section uk-margin-remove-bottom">
            <div className="uk-container uk-flex uk-flex-center uk-flex-column">
                <div className="uk-grid uk-grid-margin-large uk-grid-medium" data-uk-grid>
                    <div className="uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right">
                        <h1>{data.heroCTA.headline}</h1>
                        {data.leader && data.leader.map((text, i) =>
                            <p key={`text-${i}`}>{text[0].value}</p>
                        )}
                        <div>
                              <a href={data.ctaUrl} className={`${style.ctaButton} uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-blue uk-border-pill`}>
                                  {data.heroCTA.heroCtaButtonLabel}
                              </a>
                        </div>
                        {offer ?
                        <>
                        <div className="uk-container uk-container-expand uk-visible@m">
                            <div className="uk-width-2-3">
                                <Img
                                    fluid={offer.fluid}
                                    alt=""
                                    style={{maxWidth: "400px"}}
                                />
                                <p className="uk-text-small uk-margin-remove uk-text-muted"><small>* Terms and conditions apply</small></p>
                            </div>
                        </div>
                        </>
                        : null
                        }
                    </div>
                    <div className="uk-width-1-1 uk-width-expand@m uk-flex uk-flex-center uk-flex-column">
                        <Video videoSrcURL={data.heroCTA.videoPath} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroDefault;

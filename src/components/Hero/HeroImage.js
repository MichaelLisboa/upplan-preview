import React from "react";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import style from "./Hero.module.css";

const HeroImage = ({data}) => {
    const leader = data.heroCTA.subHeadline.content.map(copy => copy.content);
    const offer = data.heroCTA.desktopOffer;

    return (
        <div className={`uk-cover-container ${style.header}`}>
            <BackgroundImage
                Tag="div"
                fluid={data.heroCTA.imageFile.fluid}
                preserveStackingContext={true}
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: "rgba(29, 38, 54, 0.6)",
                    backgroundPosition: `center center`,
                    display: `flex`,
                    alignItems: `center`,
                    height: "100%"
                  }}
              >
                <div className="uk-container uk-light">
                    <div className="uk-grid uk-grid-large" data-uk-grid>
                        <div className="uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right">
                            <h1>{data.heroCTA.headline}</h1>
                            {leader.map((text, i) =>
                                <p className="" key={`text-${i}`}>{text[0].value}</p>
                            )}
                            <div className="">
                                  <a href={data.ctaUrl} className={`${style.ctaButton} uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-default uk-border-pill`}>
                                      {data.heroCTA.heroCtaButtonLabel}
                                  </a>
                            </div>
                            {offer ?
                            <div className="uk-container uk-container-expand uk-visible@m">
                                <div className="uk-width-2-3">
                                    <Img
                                        fluid={offer.fluid}
                                        alt=""
                                    />
                                    <p className="uk-text-small uk-margin-remove uk-text-muted"><small>* Terms and conditions apply</small></p>
                                </div>
                            </div>
                            : null
                            }
                        </div>
                    </div>
                </div>
              </BackgroundImage>
        </div>
    )
}

export default HeroImage;

import React, {useEffect} from "react";
import { VideoCover } from "../Video";
import style from "./Hero.module.css";

const HeroVideo = ({data}) => {
    const leader = data.heroCTA.subHeadline.content.map(copy => copy.content);
    // const desktopOffer = data.heroCTA.desktopOffer;
    // const mobileOffer = data.heroCTA.mobileOffer;
    const offer = data.heroCTA.offer;

    return (
        <div className={`uk-cover-container ${style.header}`}>
            <VideoCover videoSrcURL={data.heroCTA.videoPath}>
                <div className="uk-container uk-light">
                    <div className="uk-margin-top@m uk-margin-bottom@m uk-margin-remove@m">
                        <div className="uk-width-1-1 uk-width-2-5@m uk-margin-small-left uk-margin-small-right">
                            <h1>{data.heroCTA.headline}</h1>
                            {leader.map((text, i) =>
                                <p className="" key={`text-${i}`}>{text[0].value}</p>
                            )}
                            <div className="uk-margin-bottom">
                                  <a href={data.ctaUrl} className="uk-width-1-1 uk-width-auto@m uk-button uk-button-large uk-button-default uk-border-pill">
                                      {data.heroCTA.heroCtaButtonLabel}
                                  </a>
                            </div>
                            {offer.offer ?
                            <div className="uk-width-4-5 uk-width-3-5@m">
                                <div className={style.ctaOffer} dangerouslySetInnerHTML={{ __html: offer.offer.childMarkdownRemark.html }} />
                                <p className="uk-text-small uk-margin-remove"><small>* Terms and conditions apply</small></p>
                            </div>
                            : null
                            }
                        </div>
                    </div>
                </div>
            </VideoCover>
        </div>
    )
}

export default HeroVideo;

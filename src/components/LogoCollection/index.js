import React from 'react';
import style from './LogoGrid.module.css';

const LogoImages = ({logos}) => {
    console.log(logos)
    return (
        logos.map((logo, i) =>
            <div key={i} className={`${style.LogoImage}`}>
                <img
                    src={logo.fields.file.url}
                    alt=""
                    className={style.gatsbyImage}
                    />
            </div>
        )
    )
}

export const LogoGrid = ({items}) => {
    return (
        <div className="uk-container uk-container-small">
            {items.sectionHeadline ? <h1 className="uk-text-center uk-margin-bottom">{items.sectionHeadline}</h1> : null}
            {items.sectionSubHeadline ?
                <div className="uk-h3 uk-text-center" dangerouslySetInnerHTML={{ __html: items.sectionSubHeadline.childMarkdownRemark.html }} />
                : null
            }
            <div className="uk-margin-auto-left uk-margin-auto-right">
            <div className={`uk-grid uk-margin-remove-left uk-margin-remove-right uk-grid-row-large uk-child-width-${items.logoImage.length <=3 ? "1-3" : "1-4"} uk-child-width-2-4@m uk-margin-large-top`}
                data-uk-scrollspy={`cls: uk-animation-slide-bottom-medium; target: div; delay: ${20};`} data-uk-grid>
                <LogoImages logos={items.logoImage} />
            </div>
            </div>
        </div>
    )
}

export const LogoCarousel = ({items}) => {
    return (
        <div className="uk-container uk-container-small uk-margin-xlarge">
            {items.sectionHeadline ? <h2 className="uk-text-center uk-margin-medium-bottom">{items.sectionHeadline}</h2> : null}
            {items.sectionSubHeadline ?
                <div className="uk-h3 uk-text-center" dangerouslySetInnerHTML={{ __html: items.sectionSubHeadline }} />
                : null
            }
            <div className="uk-slider-container" data-uk-slider="autoplay: true; sets: true; autoplay-interval: 4000;">
                <div className="uk-grid uk-margin-remove-left uk-margin-remove-right uk-slider-items uk-child-width-1-4 uk-child-width-1-5@m" data-uk-grid>
                    <LogoImages logos={items.logoImage} />
                </div>
            </div>
        </div>
    )
}

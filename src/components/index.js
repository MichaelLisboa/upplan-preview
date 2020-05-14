import React from "react";
import Img from "gatsby-image";

export const BenefitsGrid = ({benefits}) =>
    <div className="uk-container uk-margin-large-bottom">
        <div className="uk-grid uk-grid-row-large uk-child-width-1-2@s uk-child-width-1-3@m" data-uk-grid>
            {benefits.map((item, i) =>
                <div key={item.benefitId} className="uk-text-center@m">
                    <div className="uk-grid uk-padding-small uk-margin-remove@m" data-uk-grid>
                        <div className="uk-width-1-4 uk-width-1-1@m uk-margin-small-top uk-margin-remove-top@m">
                            <Img
                                fluid={item.benefitIcon.fluid}
                                alt={item.benefitTitle}
                                style={{width: "100%", maxWidth: "100px"}}
                                className="uk-margin-auto-left uk-margin-auto-right"
                                 />
                         </div>
                        <div className="uk-width-expand uk-width-1-1@m">
                                <h4 className="uk-margin-medium-top@m uk-margin-small-bottom">{item.benefitTitle}</h4>
                                <p className="uk-margin-remove-top">{item.benefitCopy.benefitCopy}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>

export const BenefitsTwoCol = ({sections}) => {
    return (
        <div className="go-big-go-home uk-container">
            {sections.map((item, i) =>
            <div key={item.sectionId}>
                <div key={`sections-${i}`} className="uk-grid uk-grid-large uk-margin-xlarge" data-uk-grid>
                    <div key={`benefit-${i}`} className={`uk-flex uk-flex-middle uk-width-3-5@m ${(i % 2 === 0) ? "uk-flex-right" : "uk-flex-left"}`}>
                        {item.sectionMedia.file.contentType.split('/')[0] === "image" ?
                        <Img
                            fluid={item.sectionMedia.fluid}
                            alt={item.sectionTitle}
                            style={{width: "100%"}}
                             />
                        :
                        <video className="uk-box-shadow-hover-xlarge uk-box-shadow-large" autoPlay muted loop>
                            <source src={item.sectionMedia.file.url} type="video/mp4" />
                        </video>
                        }
                     </div>
                     <div className={`benefits-copy uk-flex uk-flex-column uk-flex-center uk-width-2-5@m ${(i % 2 === 0) && "uk-flex-first@m"}`}>
                        <h2>{item.sectionTitle}</h2>
                        <div dangerouslySetInnerHTML={{ __html: item.sectionCopy.childMarkdownRemark.html }} />
                    </div>
                </div>
            </div>
            )}
        </div>
    )}

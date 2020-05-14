import React from "react";
import style from "./Testimonials.module.css";

const Testimonials = ({data}) => {
    return (
        <section
            style={{backgroundColor: '#f8f8f8'}}
            className="uk-section uk-section-xsmall uk-hidden"
            data-uk-scrollspy={`cls: uk-animation-fade; delay: 200;`}>
            <div className="uk-container uk-container-small uk-child-width-2-3@m uk-margin-large-bottom uk-margin-large-top">
                <div className="uk-position-relative uk-text-center" data-uk-slider="autoplay: true;">
                    <ul className="uk-slider-items uk-child-width-1-1">
                        {data.map((testimonial, i) =>
                            <li key={testimonial.testimonialId}>
                                <div className={style.testimonialQuote} dangerouslySetInnerHTML={{ __html: testimonial.quote.childMarkdownRemark.html }} />
                                <p className="uk-text-small uk-text-center uk-text-bold uk-margin-remove">{testimonial.source}</p>
                                <p className="uk-text-small uk-text-muted uk-text-center uk-margin-remove">{testimonial.role}</p>
                            </li>
                        )}
                    </ul>
                    <div className="uk-margin-medium-top">
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;

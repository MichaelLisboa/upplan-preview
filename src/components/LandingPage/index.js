import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLandingPosts } from '../../lib/contentful';

const LandingDetail = ({...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState({})
    useEffect(
        () => {
            getLandingPosts()
                .then(response => {
                    console.log(response)
                    setPosts(response.items.map(p => p.fields))
                    setIsLoading(false);
                })
        }, []
    )

    if (isLoading) return <div />;
    return (
        <section className="uk-section uk-section-large uk-section-muted">
            <div className="uk-container uk-container-small">
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" data-uk-grid>
                    {posts.map((post, i) =>
                        <div key={post.pageItentifier} className="uk-margin">
                            <div className="uk-card uk-card-body uk-card-default uk-margin uk-box-shadow-small uk-box-shadow-hover-large">
                                <p className="uk-h4">{post.description}</p>
                                <p className="uk-text-small">{post.pageName}</p>
                                <Link className="uk-button uk-button-text cta-button" to={`/landing/${post.pageIdentifier}`}>View this</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LandingDetail;

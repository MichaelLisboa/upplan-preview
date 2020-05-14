import React, {useEffect} from "react";
import style from "./Hero.module.css";

const EmbedVideo = ({data}) => {
    return (
        <section className="uk-section uk-section-xsmall">
            <div className="uk-container uk-container-large">
                <div style={{position: "relative", paddingBottom: "55.25%", height: "0", overflow: "hidden", zIndex: "5"}} className="uk-box-shadow-large">
                    <iframe
                        style={{position: "absolute", top: "0", left: "0", height: "100%", width: "100%"}}
                        src={data.heroCTA.mediaPath}
                        frameBorder="0"
                    />
                </div>
            </div>
        </section>
    )
}

export default EmbedVideo;

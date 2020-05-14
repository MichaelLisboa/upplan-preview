import React from "react";
import style from './Video.module.css';

export const Video = ({ videoSrcURL }) => {
    const url = `${videoSrcURL}?autoplay=1&loop=1&background=1&autopause=0`;
    return (
        <div className={`${style.responsiveVideo}`}>
            <iframe
                src={url}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                frameBorder="0"
            />
        </div>
    )
}

export const VideoCover = ({ videoSrcURL, children }) => {
    const url = `${videoSrcURL}?autoplay=1&loop=1&background=1&autopause=0`;
    return (
        <div style={{height: "vh50", overflow: "hidden"}} className={`uk-cover-container`}>
            <div style={{position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden", zIndex: "5"}}>
                <div className={style.overlayGrey}>
                <iframe
                    style={{position: "absolute", top: "0", left: "0", height: "100%", width: "100%"}}
                    src={url}
                    autoPlay
                    frameBorder="0"
                />
                </div>
                <div style={{minHeight: "800px", position: "relative", zIndex: "2"}} className={`uk-container uk-light uk-flex uk-flex-column uk-flex-center`} data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
                    {children}
                </div>
            </div>
        </div>
    )
}

// export const VideoCover = ({ videoSrcURL, children }) => {
//     return (
//         <div className={`uk-cover-container`}>
//             <div className={style.fullscreenVideo}>
//                 <video className="uk-background-secondary" autoPlay muted loop data-uk-cover>
//                     <source src={video} type="video/mp4" />
//                 </video>
//                 <div style={{minHeight: "800px", position: "relative", zIndex: "2"}} className={`uk-container uk-light uk-flex uk-flex-column uk-flex-center`} data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
//                     {children}
//                 </div>
//             </div>
//
//         </div>
//     )
// }

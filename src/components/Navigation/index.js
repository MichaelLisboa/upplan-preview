import React from "react";
import { Link } from 'react-router-dom';
import style from "./Navigation.module.css";

import defaultLogo from "../../images/up-logo.svg";

const Navigation = ({logo, conversionUrl}) => {
    return (
        <div className={style.nav} data-uk-sticky="cls-active: uk-navbar-sticky uk-box-shadow-small; bottom: #transparent-sticky-navbar">
            <div className="uk-container">
                <nav className="uk-navbar-container" data-uk-navbar>
                    <div className="uk-navbar-left uk-margin-xlarge-left@m">
                        <div className={`uk-navbar-item uk-logo ${style.Logo}`}>
                        {logo ?
                            <div dangerouslySetInnerHTML={{ __html: logo.code.content[0].content[0].value }} />
                            :
                            <img src={defaultLogo} alt="Up Plan by BetterTradeOff" width="50" data-uk-img />
                        }
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="uk-navbar-nav uk-margin-xlarge-right@m" data-uk-scrollspy="cls:uk-animation-fade">
                            <div className="uk-navbar-item">
                                <a href={conversionUrl ? conversionUrl : "https://account.upplan.sg/"} className="uk-button uk-button-blue uk-border-pill">Start Now</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;

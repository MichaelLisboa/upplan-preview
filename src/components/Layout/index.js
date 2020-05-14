import React, { useEffect } from "react";
import Navigation from "../Navigation";

const Layout = ({ children, props }) => {

  useEffect(
        () => {
            try {
                const UIkit = require("uikit/dist/js/uikit");
                const Icons = require("uikit/dist/js/uikit-icons");
                UIkit.use(Icons);
            } catch (e) {
                console.error("UIKit ERROR", e);
            }
        }, []
    )

  return (
    <>
        <Navigation logo={props && props.logo} conversionUrl={props && props.conversionUrl} />
        <main>
        {children}
        </main>
        <footer className="uk-section uk-background-secondary">
            <div className="uk-text-center uk-padding-remove-horizontal">
                <p className="uk-text-small uk-text-muted"><small>
                    &copy; 2018-2020 BetterTradeOff Solutions Pte Ltd. All Rights Reserved<br />
                    <a className="uk-link-reset uk-margin-small-left" target="_blank" rel="noopener noreferrer" href="https://www.upplan.sg/privacy-policy">Privacy Policy</a>
                    <a className="uk-link-reset uk-margin-small-left" target="_blank" rel="noopener noreferrer" href="https://www.upplan.sg/terms">Terms of Use</a>
                    <a className="uk-link-reset uk-margin-small-left" target="_blank" rel="noopener noreferrer" href="https://cdn.bettertradeoff.com/web/documents/promo_tnc.pdf">*Promotion Term and Conditions</a>
                    </small>
                </p>
            </div>
        </footer>
    </>
  )
}

export default Layout

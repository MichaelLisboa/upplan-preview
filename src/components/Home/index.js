import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Home = ({...props}) => {
    const history = useHistory();
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [token, setToken] = useState(localStorage.auth_token);

    useEffect(
        () => {
            if(token) history.push('/landing');
        }, []
    )

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: process.env.REACT_APP_LANDING_LOGIN_EMAIL,
            password: process.env.REACT_APP_LANDING_LOGIN_PASSWORD
        }

        if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
            const token = process.env.REACT_APP_LANDING_TOKEN;
            localStorage.setItem('auth_token', token);
            history.push('/landing');
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }

    return (
        <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport" data-uk-height-viewport>
            <div className="uk-width-medium uk-padding-small">
            <h2>Login In</h2>
            <form className="toggle-class" autoComplete="off" onSubmit={handleLoginSubmit}>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin-small">
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                            <input
                                className="uk-input uk-form-large uk-border-rounded"
                                required
                                placeholder="Enter email"
                                type="email"
                                value={emailInput}
                                onChange={handleEmailChange}
                                />
                        </div>
                    </div>
                    <div className="uk-margin-small">
                        <div className="uk-inline uk-width-1-1">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                            <input
                                className="uk-input uk-form-large uk-border-rounded"
                                required
                                type="password"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={passwordInput}
                                onChange={handlePasswordChange}
                                />
                        </div>
                    </div>
                    <div className="uk-margin-bottom">
                        <button type="submit" className="uk-button uk-button-large uk-button-secondary uk-border-rounded uk-width-1-1">LOG IN</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </div>
    );
}

export default Home;

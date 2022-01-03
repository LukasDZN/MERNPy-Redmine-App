// Source: https://newbedev.com/html-sign-in-with-google-button-css-color-code-example

import './GoogleLoginButton.css'
import googleLogo from './g-logo.png';
import config from '../config.js';

export default function GoogleLoginButton() {

    const googleLogin = () => {
        window.open(config().BACKEND_DOMAIN + config().BACKEND_PORT + "/auth/google", "_self")
    };

    return (
        <div className='g-sign-in-button'>
            <div className='content-wrapper'>
                <div className='logo-wrapper'>
                {/* <img alt="google-logo" src='https://developers.google.com/identity/images/g-logo.png' /> */}
                <img alt="google-logo" src={googleLogo} />
                </div>
                <span className='text-container' onClick={googleLogin}>
                    <span>Sign in with Google</span>
                </span>
            </div>
        </div>
    )
};

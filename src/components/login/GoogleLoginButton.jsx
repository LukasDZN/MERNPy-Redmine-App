// Source: https://newbedev.com/html-sign-in-with-google-button-css-color-code-example

import './GoogleLoginButton.css'

export default function GoogleLoginButton() {

    const googleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    };

    return (
        <div className='g-sign-in-button'>
            <div className='content-wrapper'>
                <div className='logo-wrapper'>
                    <img alt="google-logo" src='https://developers.google.com/identity/images/g-logo.png' />
                </div>
                <span className='text-container' onClick={googleLogin}>
                    <span>Sign in with Google</span>
                </span>
            </div>
        </div>
    )
};
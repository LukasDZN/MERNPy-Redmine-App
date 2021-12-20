import React from 'react'

// If 'redirectUrl' is present in the response, redirect to that url.
export default function redirectMiddleware(responseObject) {

    // If 'redirectUrl' is present in the response, redirect to that url.
    if (responseObject.redirectUrl) {
        window.location.href = responseObject.redirectUrl;
    };

}

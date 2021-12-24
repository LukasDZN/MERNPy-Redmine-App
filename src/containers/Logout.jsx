import React from 'react';
import logout from '../api/logout';

export default function Logout() {
    
    // Delete all cookies from the front-end
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    // Extra option as some cookies might be saved to the local storage
    // window.localStorage.clear();
    // Call a function to delete session data from the back-end (and make the current cookies invalid)
    logout();
    
    return '';
}
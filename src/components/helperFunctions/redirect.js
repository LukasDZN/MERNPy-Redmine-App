import React from 'react'
import  { Redirect } from 'react-router-dom'

// https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router

const ProtectedComponent = () => {
  if (authFails) {
    return <Redirect to='/login' />
  };
};
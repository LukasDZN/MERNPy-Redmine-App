import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import GoogleLoginButton from '../components/login/GoogleLoginButton.jsx';

// Source: https://mui.com/getting-started/templates/sign-in/

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://tribepayments.com/">
        Tribe statistics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevents browser from refreshing
  //   const data = new FormData(event.currentTarget);
  // };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5" sx={{
            marginBottom: 2}}>
            Sign in
          </Typography>

          <GoogleLoginButton />

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}
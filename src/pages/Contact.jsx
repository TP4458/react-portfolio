// import React from 'react';
import { Grid, IconButton, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import links from '../data/links';
import { Typewriter } from 'react-simple-typewriter';

export default function Contact() {
  const fontFamily = ['Kode Mono', 'Poppins', 'Roboto'].join(',');
  const styles = {
    icon: {
      color: 'white',
      fontSize: '10rem',
      backgroundColor: 'rgb(24, 24, 24)',
      borderRadius: '10px',
    },
    container: {
      marginTop: '10vh',
      textAlign: 'center',
    },
    link: {
      underline: 'none',
      textDecoration: 'none',
      fontFamily: fontFamily,
    },
    typewriter: {
      fontFamily: ['Kode Mono', 'Poppins', 'Roboto'],
      letterSpacing: '4px',
      marginBottom: '50px',
      fontSize: '2.5rem',
      float: 'left',
    },
    typography: {
      fontFamily: ['Kode Mono', 'Poppins', 'Roboto'],
      fontSize: '1.4rem',
    },
  };

  return (
    <>
      <div>
        <p style={styles.typewriter}>
          {' '}
          <Typewriter
            words={['YOU CAN CONTACT ME HERE:']}
            loop={1}
            cursor
            cursorStyle="▢"
            deleteSpeed={9}
            typeSpeed={110}
            delaySpeed={1000}
          />
        </p>

        <Grid
          container
          // spacing={8}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={2}
          style={{ marginTop: '2vh' }}
        >
          {links.map((link, i) => (
            <div key={i}>
              <Link component="a" href={link.href} style={styles.link}>
                <IconButton
                  key={i}
                  color="inherit"
                  size="medium"
                  style={styles.icon}
                >
                  <Icon icon={link.icon} />
                </IconButton>
              </Link>
              <p style={styles.typography}>{link.name}</p>
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}

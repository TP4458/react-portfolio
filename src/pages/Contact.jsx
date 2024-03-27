// import React from 'react';
import { Grid, IconButton, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import links from '../data/links';
import { Typewriter } from 'react-simple-typewriter';

export default function Contact() {
  const styles = {
    icon: {
      color: 'var(--tetriaryColor)',
      fontSize: '10rem',
      backgroundColor: 'rgb(24, 24, 24)',
      borderRadius: '10px',
    },
    container: {
      marginTop: '10vh',
      marginBottom: '30vh',
      textAlign: 'center',
    },
    link: {
      underline: 'none',
      textDecoration: 'none',
    },
    typewriter: {
      letterSpacing: '4px',
      marginBottom: '20vh',
      marginTop: '12vh',
      fontSize: '2.5rem',
    },
    typography: {
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
          // spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={2}
          style={styles.container}
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

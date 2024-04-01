// import React from 'react';
import { Grid, IconButton, Link, Typography } from '@mui/material';
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
    contact: {
      letterSpacing: '4px',
      marginBottom: '20vh',
      marginTop: '12vh',
      fontSize: '2.5rem',
    },
    typography: {
      fontSize: '1.2rem',
      letterSpacing: '1.9px',
    },
  };

  return (
    <>
      <Typography style={styles.contact}>YOU CAN CONTACT ME HERE.</Typography>

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
              <IconButton color="inherit" size="medium" style={styles.icon}>
                <Icon icon={link.icon} />
              </IconButton>
            </Link>
            <p style={styles.typography}>{link.name}</p>
          </div>
        ))}
      </Grid>
    </>
  );
}

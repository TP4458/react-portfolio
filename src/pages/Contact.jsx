import React from 'react';
import { Grid, IconButton, Typography, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import links from '../data/links';

export default function Contact() {
  const styles = {
    icon: {
      color: 'wheat',
      fontSize: '10rem',
      backgroundColor: 'rgb(24, 24, 24)',
      borderRadius: '10px',
      margin: '0.5rem',
    },
    container: {
      marginTop: '10vh',
      textAlign: 'center',
    },
    link: {
      underline: 'none',
      textDecoration: 'none',
      color: 'wheat',
    },
    footer: {
      fontSize: '0.75rem',
    },
  };

  return (
    <>
      <div>
        <h3>CONTACT</h3>
        <p style={{ fontFamily: 'Courier', fontWeight: 'bold' }}>
          <Typography
            words={['Feel free to contact me!', "Let's get in Touch!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
          style={{ marginTop: '1vh' }}
        >
          {links.map((link, i) => (
            <div key={i}>
              <Link component="a" href={link.href} style={styles.link}>
                <IconButton
                  key={i}
                  color="secondary"
                  size="medium"
                  style={styles.icon}
                >
                  <Icon icon={link.icon} />
                </IconButton>
              </Link>
              <Typography>{link.name}</Typography>
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}

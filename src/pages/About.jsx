// import React from 'react';
import { Icon } from '@iconify/react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import skills from '../data/skills';

const fontFamily = ['Raleway', 'Kode Mono', 'Poppins', 'Roboto'].join(',');

const styles = {
  mainGrid: {},
  txtGrid: { flexShrink: 1, padding: '5rem', placeItems: 'center' },
  skillGrid: {
    marginTop: '1vh',
    padding: '2px',
    borderRadius: '10px',
  },
  icon: {
    fontSize: '4rem',
    backgroundColor: 'inherit',
    // color:"var(--primeColor)";
    padding: '0.5rem',
  },
  img: {},
  p: {},
  textColor: {
    color: 'var(--tetriaryColor)',
    border: 'none',
    // fontWeight: 'bold',
    fontFamily: fontFamily,
  },
};

export default function About() {
  return (
    <Container>
      <p>
        <Typewriter
          words={['WHO AM I?']}
          loop={1}
          cursor
          cursorStyle="▢"
          deleteSpeed={9}
          typeSpeed={110}
          delaySpeed={1000}
        />
      </p>

      <Grid //mainGrid
        container
        direction="row"
        rowSpacing={{ xs: 2, md: 2 }}
        style={styles.mainGrid}
      >
        <Grid item xs={12} sm={2} md={3}>
          {/* image placeholder */}
        </Grid>
        <Grid //txtGrid
          item
          container
          xs={12}
          sm={10}
          md={9}
          style={styles.txtGrid}
        ></Grid>
      </Grid>
      <Container>
        <p>WHAT ARE MY SKILLS?</p>
        <Grid
          container
          rowSpacing={3}
          justifyContent="center"
          style={styles.skillGrid}
        >
          {skills.map((skill, i) => (
            <Link key={i} href={skill.href} underline="none" target="_blank">
              <Box item key={i} md={1} style={styles.icon}>
                <Icon color="var(--primeColor)" icon={skill.icon} />
                <Typography style={styles.textColor}>{skill.skill}</Typography>
              </Box>
            </Link>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

// import React from 'react';
import { Icon } from '@iconify/react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import skills from '../data/skills';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const styles = {
  mainGrid: {
    justifyContent: 'spaceBetween',
    marginTop: '10rem',
  },
  txtGridR: {
    padding: '1rem',
    width: '10em',
    alignItems: 'right',
    textAlign: 'end',
  },
  txtGridL: { padding: '1rem', width: '10em' },

  skillGrid: {
    marginTop: '1rem',
    padding: '2px',
    borderRadius: '10px',
  },
  icon: {
    fontSize: '4rem',
    backgroundColor: 'inherit',
    color: 'var(--primeColor)',
    padding: '0.5rem',
  },

  textColor: {
    fontSize: '1rem',
    letterSpacing: '1.2px',
    color: 'var(--tetriaryColor)',
    border: 'none',
    fontDecoration: 'none',
    underline: 'none',
    textDecoration: 'none',
    // fontWeight: 'bold',
  },
  arrow: {
    fontSize: '10rem',
    backgroundColor: 'inherit',
    color: 'var(--primeColor)',
  },
  aboutTxt: {
    width: '45rem',
    fontSize: '1.2rem',
    letterSpacing: '1.9px',
    lineHeight: '2em',
    textAlign: 'start',
    textWrap: 'balanced',
  },
  para: {
    marginTop: '16rem',
    fontSize: '2.4rem',
    letterSpacing: '1.9px',
  },
  name: {
    fontSize: '2.7rem',
    fontWeight: 'bold',
    textAlign: 'start',
    letterSpacing: '4px',
    marginBottom: '3rem',
  },
  arrowTxt: {
    fontSize: '1.2rem',
    letterSpacing: '1.9px',
    // lineHeight: '2em',
    textAlign: 'end',
  },
  // arrowTxt: { textAlign: 'end' },
};

export default function About() {
  return (
    <Container>
      <Grid //mainGrid
        container
        direction="row"
        spacing={6}
        style={styles.mainGrid}
      >
        <Grid item xs={12} lg={12} style={styles.txtGridL}>
          <Typography style={styles.name}>TOMASZ PAWLIKOWSKI</Typography>
        </Grid>
        <Grid item xs={12} lg={6} style={styles.txtGridL}>
          <Typography style={styles.aboutTxt}>
            FULL-STACK DEVELOPER WITH A BACKGROUND IN LABORATORY INDUSTRY AND
            EXPERIENCE IN ANALYSIS, QUALITY CONTROL AND MANAGEMENT.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} style={styles.txtGridR}>
          <Typography style={styles.arrowTxt}>SEE MY WORK SO FAR:</Typography>
          <Link to="/projects">
            <TrendingFlatIcon style={styles.arrow} />
          </Link>
        </Grid>
      </Grid>
      <Container>
        <p style={styles.para}>WHAT ARE MY SKILLS?</p>
        <Grid
          container
          rowSpacing={3}
          justifyContent="center"
          style={styles.skillGrid}
        >
          {skills.map((skill, i) => (
            <Box item key={i} md={1} style={styles.icon}>
              <Icon color="var(--primeColor)" icon={skill.icon} />
              <Typography style={styles.textColor}>{skill.skill}</Typography>
            </Box>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

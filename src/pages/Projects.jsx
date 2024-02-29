// import React, { useState, useEffect } from 'react';
import React from 'react';
import projects from '../data/projects';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GitHub, DoubleArrow, SmartDisplay } from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const fontFamily = ['Kode Mono', 'Poppins', 'Roboto'].join(',');

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--darkColor)',
    fontFamily: fontFamily,
    // minWidth: '0px',
    // minHeight: '0px',
  },
  cardContainer: {
    width: '66%',
    height: '450px',
    margin: '3rem auto',
    background: 'var(--secondColor)',
    borderRadius: '10px',
  },
  primaryColor: {
    color: 'var(--tetriaryColor)',
    border: 'none',
    // fontWeight: 'bold',
    fontFamily: fontFamily,
  },
  secondaryColor: {
    color: 'var(--primeColor)',
    fontFamily: fontFamily,
    fontWeight: 'Bold',
  },
  img: {
    background: 'var(--secondColor)',
    objectFit: 'cover',
  },

  typewriter: {
    float: 'left',
    marginBottom: '20px',
  },
  CardActions: {
    alignItems: 'flexEnd',
    justifyContent: 'flexEnd',
  },
};

export default function Projects() {
  return (
    <div style={styles.mainContainer}>
      {/* <Box sx={{ maxWidth: 800, margin: 'auto', mt: 5 }}> */}
      <div style={styles.typewriter}>
        <Typewriter
          words={['SEE MY PROJECTS:']}
          loop={1}
          cursor
          cursorStyle="▢"
          deleteSpeed={9}
          typeSpeed={140}
          delaySpeed={1000}
        />
      </div>
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          responsive={responsive}
        >
          {projects.map((project, i) => (
            <Card
              key={i}
              project={project}
              style={styles.cardContainer}
              elevation="8"
              className="project"
            >
              <CardActionArea href={project.gitHub} target="_blank">
                <CardMedia
                  component="img"
                  alt="project"
                  height="200vh"
                  image={project.image}
                  style={styles.img}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography
                    height="9vh"
                    variant="h5"
                    gutterBottom
                    style={styles.secondaryColor}
                  >
                    {project.name}
                  </Typography>
                  <Typography height="10vh" style={styles.description}>
                    {project.description}
                  </Typography>
                  <Typography height="2vh" style={styles.primaryColor}>
                    {project.Technologies}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={styles.CardActions}>
                <Button
                  variant="outlined"
                  style={styles.primaryColor}
                  startIcon={<GitHub />}
                  href={project.gitHub}
                  target="_blank"
                >
                  Github
                </Button>
                {project.deployed && (
                  <Button
                    variant="outlined"
                    style={styles.primaryColor}
                    startIcon={<DoubleArrow />}
                    href={project.deployed}
                    target="_blank"
                  >
                    Deployed App
                  </Button>
                )}
                {project.video && (
                  <Button
                    variant="outlined"
                    style={styles.primaryColor}
                    startIcon={<SmartDisplay />}
                    href={project.video}
                    target="_blank"
                  >
                    Video
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </div>
      {/* </Box> */}
    </div>
  );
}

// import React from 'react';
import projects from '../data/projects';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GitHub, DoubleArrow, SmartDisplay } from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter';

const fontFamily = ['Kode Mono', 'Poppins', 'Roboto'].join(',');

const styles = {
  mainContainer: {
    display: 'inlineFlex',
    background: 'var(--darkColor)',
    fontFamily: fontFamily,
  },
  cardContainer: {
    width: '80%',
    height: '450px',
    margin: '3rem auto',
    background: 'var(--secondColor)',
    borderRadius: '10px',
  },
  primaryColor: {
    color: 'white',
    border: 'none',
    // fontWeight: 'bold',
    fontFamily: fontFamily,
  },
  secondaryColor: {
    color: 'lime',
    fontFamily: fontFamily,
    fontWeight: 'Bold',
  },
  img: {
    background: 'inherit',
    objectFit: 'cover top',
  },
  typewriter: {
    float: 'left',
    marginBottom: '80px',
  },
  CardActions: {
    alignItems: 'flexEnd',
    justifyContent: 'flexEnd',
  },
};

export default function Projects() {
  return (
    <>
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
      <Box component="div" style={styles.mainContainer}>
        <Grid container justify="center">
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} xl={4} key={i}>
              <Card
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

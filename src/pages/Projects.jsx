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
    background: 'rgb(32, 33, 36)',
    height: '100%',
    fontFamily: fontFamily,
  },
  cardContainer: {
    maxWidth: '85%',
    margin: '3rem auto',
    background: 'inherit',
  },
  primaryColor: {
    color: 'white',
    border: 'none',
    // fontWeight: 'bold',
    fontFamily: fontFamily,
  },
  secondaryColor: {
    color: 'rgba(150, 202, 27, 0.911)',
    fontFamily: fontFamily,
    fontWeight: 'Bold',
  },
  img: {
    background: 'rgb(32, 33, 36)',
    maxWidth: '100%',
    objectFit: 'cover top',
  },
  typewriter: {
    float: 'left',
    marginBottom: '20px',
  },
};

export default function Projects() {
  return (
    <>
      <Box component="div" style={styles.mainContainer}>
        <div style={styles.typewriter}>
          {' '}
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
        <Grid container justify="center">
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={i}>
              <Card
                style={styles.cardContainer}
                elevation="8"
                className="project"
              >
                <CardActionArea href={project.gitHub} target="_blank">
                  <CardMedia
                    component="img"
                    alt="project"
                    height="300vh"
                    // image={project.image}
                    style={styles.img}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={styles.secondaryColor}
                    >
                      {project.name}
                    </Typography>
                    <Typography style={styles.primaryColor}>
                      {project.description}
                    </Typography>
                    <Typography>{project.Technologies}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
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

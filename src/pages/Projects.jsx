import React from 'react';
import projects from '../data/projects';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {
  Grid,
  Box,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
  createTheme,
} from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GitHub, DoubleArrow, SmartDisplay } from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter';
import { ThemeProvider } from '@emotion/react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 2000,
    },
  },
});

const styles = {
  mainContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    background: 'var(--darkColor)',
  },
  cardContainer: {
    flex: 1,
    width: '45rem',
    height: '60rem',
    margin: '3rem auto',
    background: 'var(--secondColor)',
    borderRadius: '10px',
  },
  textColor: {
    color: 'var(--tetriaryColor)',
    border: 'none',
    // fontWeight: 'bold',
  },
  textColor2: {
    color: 'var(--primeColor)',
    fontWeight: 'Bold',
  },
  textColor3: {
    color: 'var(--primeColor)',
  },
  imgWrap: {
    background: 'var(--secondColor)',
    objectFit: 'cover',
    margin: '0.2em',
    justify: 'center',
    borderRadius: '10px',
  },
  img: {
    objectFit: 'cover',
    borderRadius: '10px',
  },

  typewriter: {
    float: 'left',
    marginBottom: '20px',
  },
  CardActions: {
    alignItems: 'flexEnd',
    justifyContent: 'flexEnd',
  },
  description: {
    color: 'var(--tetriaryColor)',
    // textWrap: 'balance',
    textAlign: 'left',
    height: '17em',
    // maxHeight: '19em',
    fontSize: 12,
    overflowY: 'auto',
    paddingRight: 9,
    paddingLeft: 9,
    letterSpacing: 0.5,
    lineHeight: 1.7,
    // position: 'absolute',
  },

  technologies: {
    color: 'var(--primeColor)',
    paddingTop: 5,
  },
};

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box component="div" style={styles.mainContainer}>
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
          <Grid container spacing={2}>
            {projects.map((project, i) => (
              <Grid xs={12} sm={12} md={12} lg={6} xl={4} key={i}>
                <Card
                  project={project}
                  style={styles.cardContainer}
                  elevation="8"
                  className="project"
                >
                  {/* <CardActionArea onClick={handleOpen}> */}
                  <div style={styles.imgWrap}>
                    <CardMedia
                      style={styles.img}
                      component="img"
                      alt="project"
                      height="230rem"
                      image={project.image}

                      // sx={{ objectFit: 'contain' }}
                    />
                  </div>
                  {/* </CardActionArea> */}
                  <CardContent>
                    <Typography
                      height="3.5em"
                      variant="h5"
                      gutterBottom
                      style={styles.textColor2}
                    >
                      {project.name}
                    </Typography>
                    <Typography style={styles.description}>
                      {project.description}
                    </Typography>
                    <Typography style={styles.technologies}>
                      {project.Technologies}
                    </Typography>
                  </CardContent>

                  <CardActions style={styles.CardActions}>
                    <Button
                      variant="outlined"
                      style={styles.textColor}
                      startIcon={<GitHub />}
                      href={project.gitHub}
                      target="_blank"
                    >
                      Github
                    </Button>
                    {project.deployed && (
                      <Button
                        variant="outlined"
                        style={styles.textColor}
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
                        style={styles.textColor}
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
      </ThemeProvider>
    </>
  );
}

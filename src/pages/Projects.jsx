import React from 'react';
import projects from '../data/projects';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Container,
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
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
  },
  cardContainer: {
    width: '50rem',
    height: '60rem',
    margin: '3rem auto',
    background: 'var(--secondColor)',
    borderRadius: '10px',
  },
  textColor: {
    color: 'var(--tetriaryColor)',
    border: 'none',
    // fontWeight: 'bold',
    fontFamily: fontFamily,
  },
  textColor2: {
    color: 'var(--primeColor)',
    fontFamily: fontFamily,
    fontWeight: 'Bold',
  },
  textColor3: {
    color: 'var(--primeColor)',
    fontFamily: fontFamily,
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
  description: {
    color: 'var(--tetriaryColor)',
    fontFamily: fontFamily,
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
    fontFamily: fontFamily,
    paddingTop: 5,
  },
};

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      // sx={{ maxWidth: 800, margin: 'auto', mt: 5 }}
      style={styles.mainContainer}
    >
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
          containerClass="container"
          swipeable={true}
          draggable={true}
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
              <CardActionArea onClick={handleOpen}>
                <CardMedia
                  component="img"
                  alt="project"
                  height="230rem"
                  image={project.image}
                  style={styles.img}
                  sx={{ objectFit: 'contain' }}
                />
              </CardActionArea>
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
          ))}
        </Carousel>
      </div>
      {/* </Box> */}
    </div>
  );
}

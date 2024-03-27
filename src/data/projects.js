import pwa from '../assets/images/pwa.png';
import node from '../assets/images/node.png';
import quiz from '../assets/images/quizpage-1.jfif';
import wday from '../assets/images/wday.jfif';
import weather from '../assets/images/weather.png';
import worthy from '../assets/images/worth.jpg';
import readmegen from '../assets/images/readme1.png';
import svg from '../assets/images/svg.jfif';
import notes from '../assets/images/notes.png';
import emptracker from '../assets/images/emptracker.png/';
import clown from '../assets/images/clown.png';
import tech from '../assets/images/techblog.png';
import sspeed from '../assets/images/searchSpeed.png';

const projects = [
  {
    name: 'Text Editor - PWA',
    Technologies: 'Webpack+Workbox, IndexedDB, JS, Express, NodeJS ',
    description:
      'This text editor is a progressive web application that runs in the browser, runs offline, and can be installed onto the local machine.It uses IndexedDB and local storage for data storage to insure stored data persistence.',
    image: pwa,
    gitHub: 'https://github.com/TP4458/Text-Editor-progressive-web-app-PWA',
    deployed: 'https://cantharellus-cibarius.onrender.com/',
  },
  {
    name: 'Social Network API',
    Technologies: 'MongoDB, Mongoose, Express, NodeJS',
    description:
      "This project's goal was to build an API for a basic social network-type application that would provide options like adding a friend, creating posts(thoughts) and allowing users to react.",
    image: node,
    gitHub: 'https://github.com/TP4458/social-network-api-MongoDB',
    video:
      'https://drive.google.com/file/d/1tkDWuzXDFDzCqidTAMeVkV9AIFrSFXZm/view?pli=1',
  },
  {
    name: 'Search Functions Speed Comparison',
    Technologies: 'JS, NodeJS, Inquirer',
    description:
      "I was curious how different methods of finding a number in an array stack up agains each other in terms of speed, so I've decided to find out by building a node app that allowed me to select the search method and a number, and then precisely measured the time of search.",
    image: sspeed,
    gitHub: 'https://github.com/TP4458/search-functions-speed-comparison',
    deployed: '',
  },
  {
    name: 'CMS-style Blog - MVC',
    Technologies: 'Handlebars, Bootstrap, Sequelize, Express',
    description:
      'This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Application allows creation of user acounts and a secure login. A logged in used can create new posts/blog entries and leave comments under a post. A user profile page has visibility of all created posts and allows them to be deleted.',
    image: tech,
    gitHub: 'https://github.com/TP4458/Tech-Blog-MVC',
    deployed: 'https://techblog-mvc-tp4458-494945b75097.herokuapp.com/',
  },
  {
    name: '"Clowning Around" - entertainment industry job board',
    Technologies: 'Handlebars, Bootstrap, Sequelize, Express',
    description:
      "This was a second major bootcamp project, in which we've built a job board, focused on providing a service to the recruiters. I've contributed to the project by creating a wireframe, building the database, adding authentication, and definging most of the Express routes.",
    image: clown,
    gitHub: 'https://github.com/TP4458/clowning-around-entertainment-job-board',
    deployed: 'https://still-depths-15165-644cc0ba8436.herokuapp.com/',
  },
  {
    name: 'Backed for a E-Commerce website',
    Technologies: 'NodeJS, MySQL, Express',
    description:
      'This application was built by modyfying an expanding on the provided starter code, to provide a CRUD functionality to a database of commercial products of an e-commerce client, and to provide an organised structure to products, categories and product tags. The database was build using Sequelize, and API routes have been configured using Express.js.',
    image: node,
    gitHub: 'https://github.com/TP4458/E-Commerce-Back-End',
    video:
      'https://drive.google.com/file/d/1ZXmyqu-jEcgwP5ww00VvbuXXlyPx5gzI/view?usp=sharing',
  },
  {
    name: 'Employee Tracker - SQL',
    Technologies: 'SQL, JS, NodeJS',
    description:
      'a node.js application that uses inquirer prompts to operate a MYSQL database of employees, their roles within a company and company departments.',
    image: emptracker,
    gitHub: 'https://github.com/TP4458/Employee-Tracker-SQL',
    video:
      'https://drive.google.com/file/d/1uwqeJ8FDMIHwWkc-1MB1k8ZlWVtK6rn1/view?usp=sharing',
  },
  {
    name: 'Note Taking App - ExpressJS',
    Technologies: 'JS, ExpressJS',
    description:
      'This application is designed to allow the user to take and delete notes. It uses Express.js backend and saving and retrieving data is done by using a JSON file.',
    image: notes,
    gitHub: 'https://github.com/TP4458/Note-Taker-ExpressJS',
    deployed:
      'https://note-taker-express-js-tp4458-1faac91131cd.herokuapp.com/',
  },
  {
    name: 'SVG Logo Generator',
    Technologies: 'JS, NodeJS, Inquirer, Jest',
    description:
      "This application will generate a 200x300 .SVG file using input from the user into the command line interface. A series of prompts will be displayed, asking the user to select the shape of logo, it's color, displayed text and color of the text. Once prompts are completed a new .SVG file will be generated and saved.",
    image: svg,
    gitHub: 'https://github.com/TP4458/SVG-Logo-Maker',
    video:
      'https://drive.google.com/file/d/1S1ZPPdSDjyUDucbaFcKB63UIoua71qSi/view?usp=sharing',
  },
  {
    name: 'readme.md Generator',
    Technologies: 'JS, NodeJS, Inquirer',
    description:
      "Application uses the command line to dynamically create a professional README.md file. it uses the inquirer.js package to display a series of promts, read user's input, and produce a README.md file containing it.",
    image: readmegen,
    gitHub: 'https://github.com/TP4458/Readme-genarator',
    video:
      'https://drive.google.com/file/d/1uTkfHb9k6xFBJx45MzpU1-isSECszdsI/view?usp=sharing',
  },
  {
    name: '"Is It Worth It?"" Food&Fitness Tracker',
    Technologies: 'JQuery, Tailwind, JS',
    description:
      'First bootcamp group project! It allows a user to simply input a snack, meal, or favourite type of food, and then returns a two-fold response: recipe, and information on how long would it take to burn off the calories from searched meal through excercise.',
    image: worthy,
    gitHub: 'https://github.com/TP4458/Is-It-Worth-It-Food-and-Fitness-Tracker',
    deployed:
      'https://tp4458.github.io/Is-It-Worth-It-Food-and-Fitness-Tracker/',
  },
  {
    name: 'Weather Dashboard',
    Technologies: 'JS, HTML, CSS',
    description:
      'A weather forecast for the selected location (by city name). It will display current temperature, humidity, pressure, wind speed and direction. It will also provide a forecast for the next five days, including temperature, wind speed, and humidity. an Icon representing the weather is visible in both current and five day forecasts. Recent searches are saved into local storage and displayed, and can be clicked on to access weather data for that location.',
    image: weather,
    gitHub: 'https://github.com/TP4458/Weather-dashboard-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Weather-dashboard-Tomasz-Pawlikowski/',
  },
  {
    name: 'Day Planner',
    Technologies: 'JS, HTML, CSS, DayJS',
    description:
      "It's a simple day planner application, composed of 9 hourly segments for the working day of 9-17, that the user can save their schedule into. t features a current date and time display, save buttons allowing the user to save the information entered into individual blocks, and colour coding for past, current a present time blocks. Past blocks will be displayed in grey, current block will be displayed in red, while future time blocks will be coloured green.",
    image: wday,
    gitHub: 'https://github.com/TP4458/Day-planner-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Day-planner-Tomasz-Pawlikowski/',
  },
  {
    name: 'Quiz Game',
    Technologies: 'JS, HTML, CSS',
    description:
      'This quiz displays a set of question in a random order. The game is timed. Each correctly anwered question increases player score, incorrect answer causes the timer to reduce. Game ends when all questions are answered or the timer reaches 0. Player can save his store and name into local storage.',
    image: quiz,
    gitHub: 'https://github.com/TP4458/Quiz-game-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Quiz-game-Tomasz-Pawlikowski/',
  },
];

export default projects;

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
    description: '234',
    image: pwa,
    gitHub: 'https://github.com/TP4458/Text-Editor-progressive-web-app-PWA',
    deployed: 'https://cantharellus-cibarius.onrender.com/',
  },
  {
    name: 'Social Network API',
    Technologies: 'MongoDB, Mongoose, Express, NodeJS',
    image: node,
    gitHub: 'https://github.com/TP4458/social-network-api-MongoDB',
    video:
      'https://drive.google.com/file/d/1tkDWuzXDFDzCqidTAMeVkV9AIFrSFXZm/view?pli=1',
  },
  {
    name: 'Search Functions Speed Comparison',
    Technologies: 'JS, NodeJS, Inquirer',
    image: sspeed,
    gitHub: 'https://github.com/TP4458/search-functions-speed-comparison',
    deployed: '',
  },
  {
    name: 'CMS-style Blog - MVC',
    Technologies: 'Handlebars, Bootstrap, Sequelize, Express',
    image: tech,
    gitHub: 'https://github.com/TP4458/Tech-Blog-MVC',
    deployed: 'https://techblog-mvc-tp4458-494945b75097.herokuapp.com/',
  },
  {
    name: '"Clowning Around" - entertainment industry job board',
    Technologies: 'Handlebars, Bootstrap, Sequelize, Express',
    image: clown,
    gitHub: 'https://github.com/TP4458/clowning-around-entertainment-job-board',
    deployed: 'https://still-depths-15165-644cc0ba8436.herokuapp.com/',
  },
  {
    name: 'Backed for a E-Commerce website',
    Technologies: 'NodeJS, MySQL, Express',
    image: node,
    gitHub: 'https://github.com/TP4458/E-Commerce-Back-End',
    video:
      'https://drive.google.com/file/d/1ZXmyqu-jEcgwP5ww00VvbuXXlyPx5gzI/view?usp=sharing',
  },
  {
    name: 'Employee Tracker - SQL',
    Technologies: 'SQL, JS, NodeJS',
    image: emptracker,
    gitHub: 'https://github.com/TP4458/Employee-Tracker-SQL',
    video:
      'https://drive.google.com/file/d/1uwqeJ8FDMIHwWkc-1MB1k8ZlWVtK6rn1/view?usp=sharing',
  },
  {
    name: 'Note Taking App - ExpressJS',
    Technologies: 'JS, ExpressJS',
    image: notes,
    gitHub: 'https://github.com/TP4458/Note-Taker-ExpressJS',
    deployed:
      'https://note-taker-express-js-tp4458-1faac91131cd.herokuapp.com/',
  },
  {
    name: 'SVG Logo Generator',
    Technologies: 'JS, NodeJS, Inquirer, Jest',
    image: svg,
    gitHub: 'https://github.com/TP4458/SVG-Logo-Maker',
    video:
      'https://drive.google.com/file/d/1S1ZPPdSDjyUDucbaFcKB63UIoua71qSi/view?usp=sharing',
  },
  {
    name: 'readme.md Generator',
    Technologies: 'JS, NodeJS, Inquirer',
    image: readmegen,
    gitHub: 'https://github.com/TP4458/Readme-genarator',
    video:
      'https://drive.google.com/file/d/1uTkfHb9k6xFBJx45MzpU1-isSECszdsI/view?usp=sharing',
  },
  {
    name: '"Is It Worth It?"" Food&Fitness Tracker',
    Technologies: 'JQuery, Tailwind, JS',
    image: worthy,
    gitHub: 'https://github.com/TP4458/Is-It-Worth-It-Food-and-Fitness-Tracker',
    deployed:
      'https://tp4458.github.io/Is-It-Worth-It-Food-and-Fitness-Tracker/',
  },
  {
    name: 'Weather Dashboard',
    Technologies: 'JS, HTML, CSS',
    image: weather,
    gitHub: 'https://github.com/TP4458/Weather-dashboard-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Weather-dashboard-Tomasz-Pawlikowski/',
  },
  {
    name: 'Day Planner',
    Technologies: 'JS, HTML, CSS, DayJS',
    image: wday,
    gitHub: 'https://github.com/TP4458/Day-planner-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Day-planner-Tomasz-Pawlikowski/',
  },
  {
    name: 'Quiz Game',
    Technologies: 'JS, HTML, CSS',
    image: quiz,
    gitHub: 'https://github.com/TP4458/Quiz-game-Tomasz-Pawlikowski',
    deployed: 'https://tp4458.github.io/Quiz-game-Tomasz-Pawlikowski/',
  },
];

export default projects;

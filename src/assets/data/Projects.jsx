import { v4 as uuidv4 } from 'uuid';
import weatherDashboard from '../images/weatherDashboard.JPG';
import JATEfunction from '../images/JATEfunction.gif'
import notetaker from '../images/notetaker.PNG'
import myRecipe from '../images/myRecipe.JPG';
import workDayScheduler from '../images/workDayScheduler.JPG';
import movieHunter from '../images/movieHunter.PNG';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IoRocket } from 'react-icons/io5';
import IconLink from '../../components/IconLink';


const projects = [
  {
    id: uuidv4(),
    name: 'PWA Text Editor',
    desc:'Progressive Web Application, for modifying text. Can be saved on the local machine.',
    img: JATEfunction,
    hyperGit: <IconLink href="https://github.com/Pattiqus/PWA-Text-Editor" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://guarded-island-69149.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Dynamic Note Taker',
    desc:'A note taking application which utilises express.js & Typescript. Perfect for a to do or shopping list',
    img: notetaker,
    hyperGit: <IconLink href="https://github.com/Pattiqus/dynamic-express-based-note-taker" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://note-taker-safe-temple-09707.herokuapp.com" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'myRecipe',
    desc:'myRecipe is an application in which users have the ability to post their favourite recipes online for peers and other culinary enthusiasts around the world.',
    img: myRecipe,
    hyperGit: <IconLink href="https://github.com/Pattiqus/myRecipe" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://my-recipe-pbmm.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: "Traveler's Weather Dashboard",
    desc:'An application to get the weather from current location, or anywhere in the world, at anytime',
    img: weatherDashboard,
    hyperGit: <IconLink href="https://github.com/Pattiqus/6Week-6-Weather-Dashboard" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://pattiqus.github.io/6Week-6-Weather-Dashboard/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Work Day Scheduler',
    desc:'This repository contains the source code for a work day scheduler, perfect for organizing your day',
    img: workDayScheduler,
    hyperGit: <IconLink href="https://github.com/Pattiqus/Week5-homework-work-day-scheduler" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://pattiqus.github.io/Week5-homework-work-day-scheduler/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Movie Hunter (Licence Expired)',
    desc:'This application can save you time and inform you of the hottest flicks at a location near you or abroad!',
    img: movieHunter,
    hyperGit: <IconLink href="https://github.com/Pattiqus/Movie-Hunter" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://hmughal71.github.io/Movie-Hunter/" icon={IoRocket} />
  },
];

export default projects;
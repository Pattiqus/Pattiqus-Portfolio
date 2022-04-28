import { v4 as uuidv4 } from 'uuid';
import placeholderImg from '../images/placeholderImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaRocket } from 'react-icons/fa';

const projects = [
  {
    id: uuidv4(),
    name: 'PWA Text Editor',
    desc:
      'Progressive Web Application, for modifying text. Can be saved on the local machine.',
    img: placeholderImg,
    hyperGit: <a href='https://github.com/Pattiqus/PWA-Text-Editor'>
      <FontAwesomeIcon icon={faGithub}/></a>,
    hyperDeployed: <a href='https://guarded-island-69149.herokuapp.com/'>
      <FontAwesomeIcon icon={FaRocket}/></a>
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: placeholderImg,
  },
];

export default projects;
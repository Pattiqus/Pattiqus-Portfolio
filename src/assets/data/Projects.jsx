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
    name: 'Lorem',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: 'Lorem',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: "Lorem",
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: placeholderImg,
  },
  {
    id: uuidv4(),
    name: 'Lorem',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: placeholderImg,
  },
];

export default projects;
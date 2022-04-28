import { v4 as uuidv4 } from 'uuid';
import placeholderImg from '../images/placeholderImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IoRocket } from 'react-icons/io5';


const projects = [
  {
    id: uuidv4(),
    name: 'PWA Text Editor',
    desc:
      'Progressive Web Application, for modifying text. Can be saved on the local machine.',
    img: placeholderImg,
    hyperGit: <a href='https://github.com/Pattiqus/PWA-Text-Editor'>
      <div className='icon'><FontAwesomeIcon icon={faGithub}/></div><p> GitHub</p></a>,
    hyperDeployed: <a href='https://guarded-island-69149.herokuapp.com/'>
      <div className='icon'>{<IoRocket/>}</div><p> Deployed</p></a>
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
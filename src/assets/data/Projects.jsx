import { v4 as uuidv4 } from 'uuid';
import placeholderImg from '../images/placeholderImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IoRocket } from 'react-icons/io5';
import IconLink from '../../components/IconLink';


const projects = [
  {
    id: uuidv4(),
    name: 'PWA Text Editor',
    desc:'Progressive Web Application, for modifying text. Can be saved on the local machine.',
    img: placeholderImg,
    hyperGit: <IconLink href="https://github.com/Pattiqus/PWA-Text-Editor" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://guarded-island-69149.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Dynamic Note Taker',
    desc:'A note taking application which utilises express.js & Typescript. Perfect for a to do or shopping list',
    img: placeholderImg,
    hyperGit: <IconLink href="https://github.com/Pattiqus/dynamic-express-based-note-taker" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://note-taker-safe-temple-09707.herokuapp.com" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'myRecipe',
    desc:'myRecipe is an application in which users have the ability to post their favourite recipes online for peers and other culinary enthusiasts around the world.',
    img: placeholderImg,
    hyperGit: <IconLink href="https://github.com/Pattiqus/myRecipe" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://my-recipe-pbmm.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: "Traveler's Weather Dashboard",
    desc:
      'An application to get the weather from current location, or anywhere in the world, at anytime',
    img: placeholderImg,
    hyperGit: <a href='https://github.com/Pattiqus/6Week-6-Weather-Dashboard'>
    <FontAwesomeIcon icon={faGithub}/></a>,
    hyperDeployed: <a href='https://my-recipe-pbmm.herokuapp.com/'>
    <div className='icon'>{<IoRocket width={'50'}/>}</div></a>
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
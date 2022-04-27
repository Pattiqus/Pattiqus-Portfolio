import React from 'react';
import PText from '../components/PText';
import AboutImage from '../assets/images/about_image.jpg'
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
    <div>
        <div className='container'>
          <div className='top-section'>
            <div className='left'>
              <p className='about__subheading'>
                Hi! I am <span>Pat Brown!</span>
              </p>
              <h2 className='about__heading'>Full Stack Web Developer</h2>
              <div className='about__info'>
                <PText>
                  Thank you for visiting my page!. I am from Melbourne, Australia.
                  A keen and curious science and technology proffesional with a combined 6 years in various
                  roles within the automotive industry, working for 2 world leading manufactuers.
                  <br/><br/>
                  Recently my curiosity has moved me away from my engineering roots
                  and lead me into the world of programming and information technology.
                  My journey begun when I decided to take the plunge and reach out to a mentor for advice on how to start coding.
                  I joined a bootcamp run by Monash University and Trilogy education services and have never looked back.
                  <br/><br/>
                  My dream is to make the world a better place through the use off technology and help others bring their goals and dreams to life
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImage} alt="Pat Brown Candid"/>
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
              title='Royal Melbourne Institute of technology (RMIT)'
              items={['Associate Degree in Mechanical Engineering', 'Bachelors Degree in Mechanical Engineering']}
              />
              <AboutInfoItem
              title='Monash University'
              items={['Full-Stack Javascript Bootcamp']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skill Set</h1>
              <AboutInfoItem
              title='Front End'
              items={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js']}
              />
              <AboutInfoItem
              title='Back End'
              items={['Node.js', 'Express', 'MongoDB', 'mySQL', 'GraphQL']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiance</h1>
              <AboutInfoItem
              title='Honda Australia'
              items={['2017 - 2019']}
              />
              <AboutInfoItem
              title='Toyota Motor Corporation Australia'
              items={['2019 - Present']}
              />
            </div>
          </div>
        </div>
    </div>
    </AboutPageStyles>
  )
}

import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/images/hero_image.jpg';
import PText from './PText';

const HeroStyles = styled.div`
    .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .hero__name {
            font-size: 7rem;
            font-family: 'Tomatoes-O8L8';
            color: var(--gray-1); 
            margin-bottom: 100px;
        }
    }
    .hero__image {
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .hero__info {
        margin-top: -18rem;
    }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
        <div className="hero">
            <div className="container">
                <h1 className='hero__heading'>
                    <span>Pat Brown</span>
                    <span className='hero__name'>Pattiqus</span>
                </h1>
                <div className="hero__image">
                    <img src={HeroImage} alt='me-chinatown'/>
                </div>
                <div className="hero__info">
                    <PText>Hello! My name is Pat, and welcome to my portfolio! Feel free to browse my works,
                        learn a little more about me 
                        or get in touch if you would like to collaborate!</PText>
                </div>
            </div>
        </div>
    </HeroStyles>
  )
}

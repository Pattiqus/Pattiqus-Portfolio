import React from 'react'
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyle = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
`;

export default function ContactInfo({
    icon = <MdPlace/>,
    text = 'information',
}) {

  return (
    <div>
        <div className='icon'></div>
        <div className='info'>
            <PText>{text}</PText>
        </div>
    </div>
  )
}

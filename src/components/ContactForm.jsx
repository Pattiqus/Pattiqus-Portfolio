import React, { useState } from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';



const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
const [name, setName ] = useState('');
const [email, setEmail ] = useState('');
const [message, setMessage ] = useState('');

  return (
    <div>
      <FormStyle>
        <form>
            <div className="form-group">
              <label htmlFor='name'>
                Your name
                <input 
                  type='text' 
                  id='name' 
                  name='name' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}>
                </input>
                <small className='text-warning'>Name is required</small>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor='email'>
                Your email address
                <input 
                  type='text' 
                  id='email' 
                  name='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}>
                </input>
                <small className='text-warning'>Email is required</small>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor='message'>
                Your message
                <textarea 
                  type='text' 
                  id='message' 
                  name='message' 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <small className='text-warning'>Message is required</small>
              </label>
            </div>
            <button type="submit">Send</button>
        </form>
        </FormStyle>
    </div>
  )
}

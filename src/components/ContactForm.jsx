import React from 'react'

export default function ContactForm() {
  return (
    <div>
        <form>
            <div className="form-group">
                <label htmlFor='name'>Your name<input type='text' id='name' name='name' value=""></input>
                </label>
            </div>
        </form>
    </div>
  )
}

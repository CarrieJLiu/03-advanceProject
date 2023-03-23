import React, { useState } from 'react'

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setaEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
   <form className='form' onSubmit={handleSubmit}>
    <h4>controlled input</h4>
    <div className='form-row'>
      <label htmlFor="name" className='from-lable'>
        name
      </label>
      <input 
      type="text" 
      classname='form-input' 
      value={name}
      onChange={(e) => setName(e.target.value)}
      id='name' />
    </div>
    <div className='form-row'>
      <label htmlFor="email" className='from-able'>
        Email
      </label>
      <input 
      type="email" 
      classname='form-input' 
      value={email}
      onChange={(e) => setaEmail(e.target.value)}
      id='email' />
    </div>
    <button type='submit' className='btn btn-block'>
      submit
    </button>
   </form>
  )
}

export default ControlledInputs;
import React, {useState} from 'react'
import './signup.css'
import { json } from 'react-router-dom';

const SignUp = () => {
  const [surname, setSurname] = useState('');
  const [otherName, setOtherName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [state, setState] = useState('');
  const [localGovt, setLocalGovt] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, Setmessage] = useState('');

  const handleSummit = async (e)=> {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/submit', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ surname, otherName, firstName, email, phone, nationality, state, localGovt, address, password}),
      });
      
      const data = await response.json();
      Setmessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-signUp'>
      <div className='loginForm'>
        <h1>Sign Up</h1>
        <form className='loginFields' onSubmit={handleSummit}>
          <label for="surname">Surname:</label><br/>
          <input type="text" id="surname" name="surname" placeholder='Insert Your Surname' value={surname} onChange={(e)=> setSurname(e.target.value)}/><br/>

          <label for="other_name">Other Name:</label><br/>
          <input type="text" id="other_name" name="other_name" placeholder='Insert Your Other Name' value={otherName} onChange={(e)=> setOtherName(e.target.value)}/><br></br>

          <label for="last_name">First Name:</label><br/>
          <input type="text" id="first_name" name="first_name" placeholder='Insert Your First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} /><br></br>

          <label for="email">Email:</label><br/>
          <input type="email" id="email" name="email" placeholder='Insert Your Email' value={email} onChange={(e)=> setEmail(e.target.value)} /><br></br>

          <label for="phone_number">Phone Number:</label><br/>
          <input type="text" id="phone_number" name="phone_number" placeholder='Insert Your Phone Number' value={phone} onChange={(e)=> setPhone(e.target.value)} /><br/>

          <label for="nationality">Nationality:</label><br/>
          <input type="text" id="nationality" name="nationality" placeholder='Insert Your Nationality' value={nationality} onChange={(e)=> setNationality(e.target.value)} /><br></br>

          <label for="state">State:</label><br/>
          <input type="text" id="state" name="state" placeholder='Insert Your State' value={state} onChange={(e)=> setState(e.target.value)} /><br/>

          <label for="LGA">Local Govt.:</label><br/>
          <input type='text' id="LGA" name='LGA' placeholder='Insert Your Local Government' value={localGovt} onChange={(e)=> setLocalGovt(e.target.value)} /><br/>
          
          <label for="address">Address:</label><br/>
          <input type="text" id="address" name="address" placeholder=' Insert Your Address' value={address} onChange={(e)=> setAddress(e.target.value)} /><br/>

          <label for="password">Password</label><br/>
          <input type='text' id='password' name='password' placeholder='Insert Your Password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br/>
        <button type='submit'>Submit</button>
        </form>
        {message && <p>{message}</p>}
        <p className='singupQ'>Already have an account? <span> Sign Up</span> </p>
        <div className='loginAgree'>
          <input type='checkbox' name='' id=''/>
          <p>By submitting, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
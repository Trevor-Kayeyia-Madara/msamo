import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './sign.css'

function SignUp() {
 // State variables for form inputs
 const [fullNames, setFullName] = useState('');
 const [companyName, setCompanyName] = useState('');
 const [email, setEmail] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 // Handle form submission
 const handleSubmit = (event) => {
   event.preventDefault();
   // Perform form validation and submission logic here
   console.log('Form submitted:', { fullNames, companyName, email, phoneNumber, password, confirmPassword });
   // Reset form fields if needed
   setFullName('');
   setCompanyName('');
   setEmail('');
   setPhoneNumber('');
   setPassword('');
   setConfirmPassword('');

 };

 return (
   <div className="wrapper">
     <h2>SIGN UP</h2>
     <form onSubmit={handleSubmit}>
       <div className="input-box">
         <input
           type="text"
           placeholder="Enter your full names"
           value={fullNames}
           onChange={(e) => setFullName(e.target.value)}
           required
         />
       </div>
       <div className="input-box">
         <input
           type="text"
           placeholder="Enter your company name"
           value={companyName}
           onChange={(e) => setCompanyName(e.target.value)}
           required
         />
       </div>
       <div className="input-box">
         <input
           type="text"
           placeholder="Enter your email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </div>
       <div className="input-box">
         <input
           type="text"
           placeholder="Enter your phone number"
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
           required
         />
       </div>
       <div className="input-box">
         <input
           type="password"
           placeholder="Create password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </div>
       <div className="input-box">
         <input
           type="password"
           placeholder="Confirm password"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           required
         />
       </div>
       
       <div className="input-box button">
         <input type="submit" value="Register Now" />
       </div>
       <div className="text">
         <h3>
           Already have an account? <Link to='/login'>Login now</Link>
         </h3>
       </div>
     </form>
   </div>
 );
};


export default SignUp
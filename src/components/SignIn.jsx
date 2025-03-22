import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './SignIn.css';

const SignIn = () => {
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);   // Toggle for sign-up form
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const navigate = useNavigate();  

  const institutes = [
    "ABC Institute of Technology",
    "XYZ Engineering College",
    "Global University",
    "Sunshine Institute",
    "None"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(`Logged in as ${role} with email: ${email}`);
      navigate('/recommendation');  
    } else {
      setError('Invalid email or password. Try again.');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (selectedInstitute && signUpEmail && signUpPassword) {
      console.log(`New user: ${signUpEmail} from ${selectedInstitute}`);
      alert("Account created successfully!");
      setShowSignUp(false);  // Hide the sign-up form
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="sign-in-page">
      <div className="container">
        <div className="left-panel">
          <h1>EVENTO</h1>
          <div className="roles">
            <button
              className={role === 'Admin' ? 'active' : ''}
              onClick={() => setRole('Admin')}
            >
              Admin
            </button>
            <button
              className={role === 'Student' ? 'active' : ''}
              onClick={() => setRole('Student')}
            >
              Student
            </button>
            <button
              className={role === 'Mentor' ? 'active' : ''}
              onClick={() => setRole('Mentor')}
            >
              Mentor
            </button>
          </div>
        </div>

        <div className="right-panel">
          <h2>Sign In / Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Login</button>

            <div className="links">
              <span onClick={() => setShowSignUp(!showSignUp)} className="link">
                Create an account
              </span>
              <a href="/forgot-password">Forget password</a>
            </div>
          </form>

          {/* Sign-up form appears when "Create an account" is clicked */}
          {showSignUp && (
            <div className="sign-up-box">
              <h3>Create an Account</h3>
              <form onSubmit={handleSignUp}>
                <label>Institute</label>
                <select
                  value={selectedInstitute}
                  onChange={(e) => setSelectedInstitute(e.target.value)}
                  required
                >
                  <option value="">Select your institute</option>
                  {institutes.map((institute, index) => (
                    <option key={index} value={institute}>
                      {institute}
                    </option>
                  ))}
                </select>

                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                />

                <button type="submit">Create Account</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

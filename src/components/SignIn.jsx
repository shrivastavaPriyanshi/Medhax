import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import for navigation
import './SignIn.css';

const SignIn = () => {
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example login validation (replace with actual logic)
    if (email && password) {
      console.log(`Logged in as ${role} with email: ${email}`);
      // Redirect to Recommendation page after successful login
      navigate('/recommendation');
    } else {
      setError('Invalid email or password. Try again.');
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
              <a href="/signup">Create an account</a>
              <a href="/forgot-password">Forget password</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

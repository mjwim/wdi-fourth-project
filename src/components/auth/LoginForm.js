import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              className="input"
            />
          </div>
        </div>
        <button className="button is-info">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

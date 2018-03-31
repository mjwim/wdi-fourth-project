import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={user.firstname}
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={user.lastname}
              className="input"
            />
          </div>
        </div>
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
        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
              className="input"
            />
          </div>
        </div>

        <button className="button is-info">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

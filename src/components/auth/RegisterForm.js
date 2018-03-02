import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          value={user.firstname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="first"
          placeholder="First name"
          onChange={handleChange}
          value={user.first}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="last"
          placeholder="Last name"
          onChange={handleChange}
          value={user.last}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"
        />
      </div>

      <button className="main-button">Register</button>
    </form>
  );
};

export default RegisterForm;

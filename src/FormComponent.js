import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetForm } from './formActions';
import './FormComponent.css';

const FormComponent = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    dispatch(resetForm());
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="label-group">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input
              id="surname"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Surname:</strong> {submittedData.surname}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {}

  function handleInputChange(event) {}

  if (redirect) return <Redirect to="/new" />;

  return (
    <div className="container">
      <header>
        <h1>My New Movies</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Movie Name</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Genre</label>
            <input
              className="form-control"
              name="genre"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <select
              className="form-control"
              name="year"
              required="required"
              onChange={handleInputChange}
            >
              <option value="DRAFT">draft</option>
              <option value="PUBLISHED">published</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;

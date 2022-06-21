import React from 'react';
import classes from '../styles/formSection.module.css';

export default function FormSection() {
  return (
    <div className={`container mt-5 mx-auto pb-5`} style={{ width: '70%' }}>
      <div className={classes.outerDiv}>
        <h5 style={{ paddingBottom: '25px' }}>
          Question, Comments, or want to be on our show? Leave us a message and
          we will get back to you.
        </h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <textarea style={{ width: '100%', height: '150px' }}></textarea>
          <div className="d-grid gap-2 col-6 mx-auto mt-3">
            <button className="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

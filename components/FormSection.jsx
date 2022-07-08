import React, { useState } from 'react';
import classes from '../styles/formSection.module.css';

export default function FormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setBody('');
      }
    });
  };

  return (
    <div className={`container mt-5 mx-auto pb-5 ${classes.containerDiv}`}>
      <div className={classes.outerDiv}>
        <h5 style={{ paddingBottom: '25px' }}>
          Question, Comments, or want to be on our show? Leave us a message and
          we will get back to you.
        </h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <textarea
            style={{ width: '100%', height: '150px' }}
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="d-grid gap-2 col-6 mx-auto mt-3">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

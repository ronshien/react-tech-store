import React from "react";
import Title from "../Title";

function Contact(props) {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us"></Title>
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="john doe"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@domain.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="important"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="hello there..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

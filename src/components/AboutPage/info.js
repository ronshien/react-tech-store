import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

function info(props) {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                className="img-fluid img-thumbnail"
                alt="about company"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about us"></Title>
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti nostrum omnis iure nam? Vel pariatur nobis unde itaque
                dolorum ipsam!
              </p>
              <button
                className="main-link"
                type="button"
                style={{ marginTop: "2rem" }}
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default info;

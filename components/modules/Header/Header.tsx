import React from "react";
import { Container } from "react-bootstrap";

export default function Header({ style }) {
  return (
    <>
      <header className="mb-7">
        <div className="page-header section-height-100">
          <div
            className={
              " position-absolute fixed-top ms-auto w-100 w-lg-75 h-100 z-index-0 d-block"
            }
            style={style}
          ></div>
          <Container>
            <div className="row">
              <div className="col-lg-7 d-flex justify-content-center flex-column">
                <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                  <h1 className="text-gradient text-primary">
                    Charleston Pride Festival
                  </h1>
                  <h2 className="mb-4">
                    Riverfront Park <br />
                    <small className="text-muted">
                      Sunday, October 3, 2021
                    </small>
                  </h2>
                  {/* <div className="buttons">
                    <button
                      type="button"
                      className="btn bg-gradient-primary mt-4"
                    >
                      <i className="fas fa-arrow-up"></i>
                      More Info
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

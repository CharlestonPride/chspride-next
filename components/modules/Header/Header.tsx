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
                    Charleston Pride
                  </h1>
                  <h2 className="mb-4">
                    Pride Week
                    <br />
                    <small className="text-muted">Fall 2022</small>
                  </h2>
                  <div className="buttons"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

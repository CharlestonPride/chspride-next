import React from "react";
import { Container } from "react-bootstrap";
import {
  LinkGradientButton,
  LinkOutlineButton,
} from "../../elements/button/button";

export default function Header({ style }) {
  return (
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
                <h1 className="text-gradient text-primary">Charleston Pride</h1>
                <div className="buttons">
                  <LinkGradientButton color="primary" href="/donate">
                    Make a Donation
                  </LinkGradientButton>
                  <LinkOutlineButton color="primary" href="/become-a-sponsor">
                    Become a Sponsor
                  </LinkOutlineButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

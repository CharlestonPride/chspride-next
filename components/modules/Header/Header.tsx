import React from "react";
import styles from "./Header.module.css";

export default function Header({}) {
  return (
    <>
      <header>
        <div className="page-header section-height-100">
          <div
            className={
              styles.background +
              " position-absolute fixed-top ms-auto w-75 h-100 z-index-0 d-block"
            }
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex justify-content-center flex-column">
                <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                  <h1 className="text-gradient text-primary">
                    Charleston Pride
                  </h1>
                  <h1 className="mb-4">Bridge the Gap</h1>
                  <p className="lead pe-5 me-5">
                    <strong>Pride Week 2021 </strong> START - END
                  </p>
                  <div className="buttons">
                    <button
                      type="button"
                      className="btn bg-gradient-primary mt-4"
                    >
                      <i className="fas fa-arrow-up"></i>
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

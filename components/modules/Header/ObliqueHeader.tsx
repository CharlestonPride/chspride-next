import React from "react";
export default function ObliqueHeader({ style, children }) {
  return (
    <header>
      <div className="page-header section-height-75">
        <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
          <div
            className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
            style={style}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
              {children}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

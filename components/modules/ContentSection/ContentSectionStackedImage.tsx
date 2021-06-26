import React from "react";
import { Orientation } from "../../../types";
import { Content, ContentProps } from "./ContentSectionCore";

type Props = ContentProps & {
  imageSrc: string;
  imageAlt: string;
  orientation?: Orientation;
};

const ContentSectionStackedImage = (props: Props) => {
  if (props.orientation == Orientation.Left) {
    return (
      <div className="container my-5 mb-lg-10">
        <div className="row">
          <div className="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
            <div className="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-lg-block h-75">
              <div
                className={
                  "w-100 h-100 border-radius-xl position-absolute bg-gradient-" +
                  props.color
                }
              ></div>
              <img
                src={props.imageSrc}
                className="w-100 border-radius-xl mt-6 ms-5 position-absolute"
                alt={props.imageAlt}
              ></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
            <div className="p-3 pt-0">
              <Content {...props} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-5 mb-lg-7">
        <div className="row ">
          <div className="col-lg-5 col-md-12 me-auto">
            <div className="p-3 pt-0">
              <Content {...props} />
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="position-relative ms-md-5 d-none d-lg-block h-75">
              <div
                className={
                  "w-100 h-100 border-radius-xl position-absolute bg-gradient-" +
                  props.color
                }
              ></div>
              <img
                src={props.imageSrc}
                className="w-100 border-radius-xl mt-6 ms-n5 position-absolute"
                alt={props.imageAlt}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentSectionStackedImage;

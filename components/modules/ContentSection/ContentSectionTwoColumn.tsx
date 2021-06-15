import React from "react";
import { Orientation } from "../../../types";
import { Content, ContentProps } from "./ContentSectionCore";

type Props = ContentProps & {
  imageSrc: string;
  imageAlt: string;
  orientation: Orientation;
};

const ContentSectionTwoColumn = (props: Props) => {
  if (props.orientation == Orientation.Left) {
    return (
      <section className="container py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-10 mx-auto text-lg-left text-center">
              <Content {...props} />
            </div>
            <div className="col-12 col-lg-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
              <img
                className="w-100 border-radius-lg shadow"
                src={props.imageSrc}
                alt={props.imageAlt}
              ></img>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="container py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
              <img
                className="w-100 border-radius-lg shadow"
                src={props.imageSrc}
                alt={props.imageAlt}
              ></img>
            </div>
            <div className="col-lg-4 col-10 mx-auto text-lg-left text-center">
              <Content {...props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ContentSectionTwoColumn;

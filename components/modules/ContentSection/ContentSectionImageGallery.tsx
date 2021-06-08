import React from "react";
import { Content, ContentProps } from "./ContentSectionCore";

type Props = ContentProps & {
  items: GalleryItem[];
};

type GalleryItem = {
  src: string;
  alt: string;
};

const ContentSectionImageGallery = (props: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-4 my-auto">
          <Content {...props}></Content>
        </div>
        <div className="col-6 d-block d-lg-none">
          <img className="img-fluid shadow" {...props.items[0]}></img>
        </div>
        <div className="col-lg-8 ps-5 pe-0 d-none d-lg-block">
          <div
            className={"row p-2 border-radius-xl bg-gradient-" + props.color}
          >
            <div className="col-lg-3 col-6 ">
              <img
                className="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                {...props.items[0]}
              ></img>
            </div>
            <div className="col-lg-3 col-6">
              <img
                className="w-100 border-radius-lg shadow"
                {...props.items[1]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[2]}
              ></img>
            </div>
            <div className="col-lg-3 col-6">
              <img
                className="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                {...props.items[3]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[4]}
              ></img>
            </div>
            <div className="col-lg-3 col-6">
              <img
                className="w-100 border-radius-lg shadow mt-3"
                {...props.items[5]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[6]}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionImageGallery;

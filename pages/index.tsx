import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ContentSectionStackedImage from "../components/modules/ContentSection/ContentSectionStackedImage";
import Header from "../components/modules/Header/Header";
import { Orientation } from "../types";
import {
  faHandHoldingUsd,
  faUserFriends,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ContentSectionTwoColumn from "../components/modules/ContentSection/ContentSectionTwoColumn";
import SocialBar from "../components/modules/Social/SocialBar";
import Smile from "../components/modules/Smile/Smile";
import ConstantContactInline from "../components/modules/Contact/ConstantContact";
import ContentSectionImageGallery from "../components/modules/ContentSection/ContentSectionImageGallery";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";
import AdCarousel from "../components/modules/Ad/AdCarousel";

const style = `.background {
  background-image: url(/images/header.jpg);
  background-size: cover;
  background-position: center 20%;
}`;
const DonateSection = () => {
  return (
    <ContentSectionStackedImage
      title="Donate"
      color="warning"
      description="Help Make Charleston Pride a Reality!"
      action={{ href: "/donate", text: "Donate" }}
      imageSrc="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg"
      imageAlt="Donate"
      icon={faHandHoldingUsd}
      orientation={Orientation.Left}
    >
      <p>
        A lot of time, effort, and money goes into organizing and putting on
        Charleston Pride. Charleston Pride Festival, Inc is funded strictly
        through sponsors and funds raised at events.
      </p>
      <p className="d-none d-md-block">
        Due to this fact, we have to raise money throughout the year in order
        for Charleston Pride to be successful. If you cannot make it to one of
        our fundraisers, you can now donate here! Also check out our monthly
        donor program, Friends of Pride.
      </p>
    </ContentSectionStackedImage>
  );
};

const FopSection = () => {
  return (
    <ContentSectionTwoColumn
      title="Friends of Pride"
      color="danger"
      description="Let's be Friends (with benefits)"
      action={{ href: "/friends-of-pride", text: "More Info" }}
      imageSrc="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-city.jpg"
      imageAlt="Donate"
      icon={faUserFriends}
      orientation={Orientation.Left}
    >
      <p>
        Become an official Friend of Pride through joining our monthly donor
        program. Friends of Pride get exclusive access to many of our events and
        some extra perks along the way.
      </p>
    </ContentSectionTwoColumn>
  );
};

const Store = () => {
  return (
    <ContentSectionImageGallery
      title="Shop With Pride"
      description="Purchase Charleston Pride Merchandise"
      items={[
        { src: "images/store/shop1.png", alt: "pride shirt" },
        { src: "images/store/shop2.png", alt: "pet bandana" },
        { src: "images/store/shop3.png", alt: "pride tank top" },
        { src: "images/store/shop4.png", alt: "anniversary shirt" },
        { src: "images/store/shop5.png", alt: "water bottle" },
        { src: "images/store/shop6.png", alt: "travel mug" },
        { src: "images/store/shop7.png", alt: "trucker hat" },
      ]}
      icon={faShoppingCart}
      color="info"
      action={{ href: "/store", text: "Shop" }}
    ></ContentSectionImageGallery>
  );
};

const Mission = () => {
  return (
    <Container className="my-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card bg-gradient-danger my-2">
            <div className="card-body py-6">
              <h2 className="text-white">Our Mission</h2>
              <div className="col lead text-white">
                Our mission is to promote the visibility of the LGBTQ community
                by educating society, honoring our heritage, advocating for our
                culture, and celebrating our diverse society.
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card bg-gradient-warning my-2">
            <div className="card-body py-6">
              <h2 className="text-white">Our Purpose</h2>
              <div className="col lead text-white">
                Our purpose is to highlight the uniqueness and diversity of our
                community through distinct events throughout the year promoting
                our history and culture, including the annual Charleston Pride
                Parade and Festival
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const headerStyle = {
  backgroundImage: `url(/images/header.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

const Home = () => {
  return (
    <Layout>
      <Header style={headerStyle} />
      <DonateSection />
      <FopSection />
      <AdCarousel />
      <SocialBar />
      {/* <ConstantContactInline /> */}
      <Store />
      <Mission />
      <Smile />
    </Layout>
  );
};

export default Home;

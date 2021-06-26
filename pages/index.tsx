import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ContentSectionStackedImage from "../components/modules/ContentSection/ContentSectionStackedImage";
import Header from "../components/modules/Header/Header";
import { Orientation } from "../types";
import {
  faHandHoldingUsd,
  faUserFriends,
  faShoppingCart,
  faHandsHelping,
  faHeart,
  faStar,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import ContentSectionTwoColumn from "../components/modules/ContentSection/ContentSectionTwoColumn";
import SocialBar from "../components/modules/Social/SocialBar";
import Smile from "../components/modules/Smile/Smile";
import ConstantContactInline from "../components/modules/Contact/ConstantContact";
import ContentSectionImageGallery from "../components/modules/ContentSection/ContentSectionImageGallery";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import AdCarousel from "../components/modules/Ad/AdCarousel";
import ContentSectionWideBackgroundImage from "../components/modules/ContentSection/ContentSectionWideBackgroundImage";
import GallerySectionDualImage from "../components/modules/GallerySection/GallerySectionDualImages";
import GallerySectionTripleImages from "../components/modules/GallerySection/GallerySectionTripleImages";
import GallerySectionSingleImage from "../components/modules/GallerySection/GallerySectionSingleImage";

const DonateSection = () => {
  return (
    <ContentSectionStackedImage
      title="Donate"
      color="warning"
      description="Help Make Charleston Pride a Reality!"
      action={{ href: "/donate", text: "Donate" }}
      imageSrc="images/parade1.jpg"
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
      imageSrc="images/prism1.jpg"
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

const Volunteer = () => {
  return (
    <ContentSectionStackedImage
      title="Volunteer with Pride"
      color="info"
      imageSrc="images/volunteer.jpg"
      imageAlt="Volunteer with Pride"
      icon={faHandsHelping}
      orientation={Orientation.Left}
      action={{ href: "/volunteer", text: "Volunteer" }}
    >
      <p className="lead">
        As a volunteer, you will help ensure the success of events throughout
        the year including fundraising events that will fund Pride Week.
      </p>
    </ContentSectionStackedImage>
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

const Breaker1 = () => {
  const itemA = { src: "images/venus.jpg", alt: "parade " };
  const itemB = { src: "images/prism2.jpg", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={1}
    ></GallerySectionDualImage>
  );
};

const Breaker2 = () => {
  const itemA = { src: "images/parade4.jpg", alt: "parade " };
  const itemB = { src: "images/parade5.jpg", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={2}
    ></GallerySectionDualImage>
  );
};
const Breaker3 = () => {
  const itemA = { src: "images/vertical3.jpg", alt: "parade " };
  const itemB = { src: "images/vertical1.jpg", alt: "parade " };
  const itemC = { src: "images/vertical2.jpg", alt: "parade " };
  return (
    <GallerySectionTripleImages
      itemA={itemA}
      itemB={itemB}
      itemC={itemC}
      color="primary"
    ></GallerySectionTripleImages>
  );
};

const Breaker4 = () => {
  return (
    <GallerySectionSingleImage
      src="images/prism3.jpg"
      alt=""
    ></GallerySectionSingleImage>
  );
};

const Breaker5 = () => {
  return (
    <div className="mt-n6">
      <GallerySectionSingleImage
        src="images/mlk.jpg"
        alt=""
      ></GallerySectionSingleImage>
    </div>
  );
};

const Breaker6 = () => {
  const itemA = { src: "images/parade6.jpg", alt: "parade " };
  const itemB = { src: "images/parade7.jpg", alt: "parade " };
  return (
    <div className="mt-n6">
      <GallerySectionDualImage
        itemA={itemA}
        itemB={itemB}
        variant={1}
      ></GallerySectionDualImage>
    </div>
  );
};

const OurMission = () => {
  return (
    <ContentSectionTwoColumn
      title="Our Mission"
      color="primary"
      imageSrc="images/tte1.jpg"
      imageAlt="Donate"
      icon={faHeart}
      orientation={Orientation.Right}
    >
      <p className="lead">
        Our mission is to promote the visibility of the LGBTQ community by
        educating society, honoring our heritage, advocating for our culture,
        and celebrating our diverse society.
      </p>
    </ContentSectionTwoColumn>
  );
};

const OurPurpose = () => {
  return (
    <ContentSectionStackedImage
      title="Our Purpose"
      color="success"
      imageSrc="images/festival1.jpg"
      imageAlt="Donate"
      icon={faSmile}
      orientation={Orientation.Right}
    >
      <p className="lead">
        Our purpose is to highlight the uniqueness and diversity of our
        community through distinct events throughout the year promoting our
        history and culture, including the annual Charleston Pride Parade and
        Festival
      </p>
    </ContentSectionStackedImage>
  );
};

const headerStyle = {
  backgroundImage: `url(/images/manson2.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

const Home = () => {
  return (
    <Layout>
      <Header style={headerStyle} />
      <DonateSection />
      <Breaker3 />
      <FopSection />
      {/* <AdCarousel /> */}
      <SocialBar />
      <Volunteer />
      <Breaker4 />
      <ConstantContactInline />
      <Store />
      <Breaker1 />
      <OurMission />
      <OurPurpose />
      <Smile />
      <Breaker2 />

      <Breaker5 />
      <Breaker6 />
    </Layout>
  );
};

export default Home;

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
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import ContentSectionTwoColumn from "../components/modules/ContentSection/ContentSectionTwoColumn";
import SocialBar from "../components/modules/Social/SocialBar";
import Smile from "../components/modules/Smile/Smile";
import ConstantContactInline from "../components/modules/Contact/ConstantContact";
import ContentSectionImageGallery from "../components/modules/ContentSection/ContentSectionImageGallery";
import GallerySectionDualImage from "../components/modules/GallerySection/GallerySectionDualImages";
import GallerySectionTripleImages from "../components/modules/GallerySection/GallerySectionTripleImages";
import GallerySectionSingleImage from "../components/modules/GallerySection/GallerySectionSingleImage";
import { Container } from "react-bootstrap";

const DonateSection = () => {
  return (
    <ContentSectionStackedImage
      title="Donate"
      color="warning"
      description="Help Make Charleston Pride a Reality!"
      action={{ href: "/donate", text: "Donate" }}
      imageSrc="parade1_jxra2b"
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
      description="Let's be Friends"
      subDescription="(with benefits)"
      action={{ href: "/friends-of-pride", text: "More Info" }}
      imageSrc="prism1_w4rd0d"
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
      imageSrc="volunteer_rthkil"
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
        { imageId: "store/shop1_ski6lo", alt: "pride shirt" },
        { imageId: "store/shop2_oejqfj", alt: "pet bandana" },
        { imageId: "store/shop3_lnk3cq", alt: "pride tank top" },
        { imageId: "store/shop4_nokbus", alt: "anniversary shirt" },
        { imageId: "store/shop5_sk3up1", alt: "water bottle" },
        { imageId: "store/shop6_tpy5yy", alt: "travel mug" },
        { imageId: "store/shop7_rr16tb", alt: "trucker hat" },
      ]}
      icon={faShoppingCart}
      color="info"
      action={{ href: "/store", text: "Shop" }}
    ></ContentSectionImageGallery>
  );
};

const Breaker1 = () => {
  const itemA = { src: "venus_gjzkui", alt: "parade " };
  const itemB = { src: "prism2_tykmea", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={1}
    ></GallerySectionDualImage>
  );
};

const Breaker2 = () => {
  const itemA = { src: "parade4_ca3ohf", alt: "parade " };
  const itemB = { src: "parade5_z1dc89", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={2}
    ></GallerySectionDualImage>
  );
};
const Breaker3 = () => {
  const itemA = { src: "vertical3_acysj6", alt: "parade " };
  const itemB = { src: "vertical1_qbwp1d", alt: "parade " };
  const itemC = { src: "vertical2_u5oj5a", alt: "parade " };
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
    <GallerySectionSingleImage src="prism3_j4vabq"></GallerySectionSingleImage>
  );
};

const Breaker5 = () => {
  return (
    <div className="mt-n6">
      <GallerySectionSingleImage src="mlk_mvrqqc"></GallerySectionSingleImage>
    </div>
  );
};

const Breaker6 = () => {
  const itemA = { src: "parade6_wlmi0c", alt: "parade " };
  const itemB = { src: "parade7_xbzzqw", alt: "parade " };
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
      imageSrc="tte1_oztwcd"
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
      imageSrc="festival1_lbf5mn"
      icon={faSmile}
      orientation={Orientation.Right}
    >
      <p className="lead">
        Our purpose is to highlight the uniqueness and diversity of our
        community through distinct events throughout the year promoting our
        history and culture, including the annual Charleston Pride Parade and
        Festival.
      </p>
    </ContentSectionStackedImage>
  );
};

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625013054/manson2_gjv7gs.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

const FestivalAnnouncement = () => {
  return (
    <Container className="my-5">
      <div className="card card-background card-background-mask-primary mt-5">
        <div className="full-background"></div>
        <div className="card-body pt-5 text-center">
          <h1 className="text-white mb-2">2021 Pride Festival Update</h1>
          <p className="lead">
            It is with heavy hearts that <strong>Charleston Pride</strong> has
            made the decision to postpone our annual Pride Parade as well as the
            October 3rd Pride Festival at Riverfront Park. Originally, the
            festival was moved to North Charleston to accommodate distance and
            safety, but the rising Covid cases disallow holding a responsible
            event for participants.
          </p>
          <p className="lead">
            Several festivals in October have been postponed in the past week
            out of health and safety concerns, both in South Carolina and
            surrounding states. <strong>Charleston Pride</strong> agrees that
            this is the best course of action to ensure the well-being of
            everyone.
          </p>
          <p className="lead">
            For the duration of the pandemic, we plan to execute smaller,
            outdoor events and indoor-optional, for those comfortable. To
            maintain both a safe and fun environment, we will implement strict
            health-related protocols. Please understand that we did not make
            this decision lightly and we look forward to gathering again as soon
            as it is safer.
          </p>
          <p className="lead">
            With love and pride,
            <br /> Charleston Pride Board of Directors
          </p>
        </div>
      </div>
    </Container>
  );
};

const Home = () => {
  return (
    <Layout>
      <Header style={headerStyle} />
      <FestivalAnnouncement />
      <DonateSection />
      <Breaker3 />
      {/* <FopSection /> */}
      <SocialBar />
      {/* <AdCarousel /> */}
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

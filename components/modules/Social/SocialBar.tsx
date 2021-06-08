import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const query =
  "?utm_source=charleston_pride&utm_medium=website&utm_campaign=homepage";
const fbUrl = "https://www.facebook.com/charlestonpride/" + query;
const instagramUrl = "https://www.instagram.com/charlestonpride/" + query;
const twitterUrl = "https://www.twitter.com/charlestonpride/" + query;

const SocialBar = ({}) => {
  return (
    <div className="container my-5">
      <div className="row mx-auto">
        <div className="col-md-6 ">
          <h4 className="mb-1">Thank you for your support!</h4>
          <p className="lead mb-0">
            Stay tuned to our socials for the latest updates.
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center ">
          <a
            href={fbUrl}
            className="btn btn-facebook me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} width="25px" className="me-2" />
            Facebook
          </a>
          <a
            href={twitterUrl}
            className="btn btn-twitter me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} width="25px" className="me-2" />
            Twitter
          </a>
          <a
            href={instagramUrl}
            className="btn btn-instagram me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} width="25px" className="me-2" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;

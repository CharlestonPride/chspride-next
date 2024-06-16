import "../styles/globals.scss";
import { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCrown,
  faFlag,
  faGrinHearts,
  faHandHoldingUsd,
  faHandsHelping,
  faHeart,
  faShoppingCart,
  faSmile,
  faTicket,
  faUserFriends,
  faEnvelope,
  faMap,
  faMartiniGlass,
  faChampagneGlasses,
  faStar,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHandHoldingUsd,
  faUserFriends,
  faShoppingCart,
  faHandsHelping,
  faHeart,
  faSmile,
  faGrinHearts,
  faFlag,
  faCrown,
  faTicket,
  faEnvelope,
  faMap,
  faMartiniGlass,
  faChampagneGlasses,
  faStar,
  faHandshake
);

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />

  );
}

export default App;

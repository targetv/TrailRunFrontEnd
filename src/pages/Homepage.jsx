import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import HeroVideo from "../components/HeroVideo";
import OfferComponent from "../components/Offer";
import RegistrationComponent from "../components/Registration";
import SponsorsComponent from "../components/Sponsors";
import GoogleMaps from "../components/Googlemaps";
import Modal from "../components/modal";

const HomepageContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 750px 400px 600px 300px 600px;

  @media screen and (max-width: 700px) {
    grid-template-rows: 1fr 1fr 1fr 1100px 300px 1fr;
  }
`;

function Homepage({ modalOn, setModal, setUserLoggedIn, setItem, item }) {
  return (
    <>
      <HomepageContainer>
        <HeroVideo />
        <AboutUs />
        <OfferComponent />
        <RegistrationComponent item={item} setItem={setItem} />
        <SponsorsComponent />
        <GoogleMaps />
      </HomepageContainer>
      {modalOn && (
        <Modal
          modalOn={modalOn}
          setModal={setModal}
          setUserLoggedIn={setUserLoggedIn}
        />
      )}
    </>
  );
}

export default Homepage;

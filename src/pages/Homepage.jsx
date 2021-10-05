
import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import HeroVideo from "../components/HeroVideo";
import OfferComponent from "../components/Offer";
import RegistrationComponent from "../components/Registration";
import SponsorsComponent from "../components/Sponsors";
import GoogleMaps from "../components/Googlemaps";




const HomepageContainer = styled.main`
display: grid;
grid-template-rows: 1fr 750px 400px 600px 300px 600px;

`







function Homepage(){
    return(
        <HomepageContainer>
         <HeroVideo/>
        <AboutUs/>
        <OfferComponent/>
        <RegistrationComponent/>
        <SponsorsComponent/>
        <GoogleMaps/>
        </HomepageContainer>
    )
}

export default Homepage
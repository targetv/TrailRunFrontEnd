
import styled from "styled-components";
import AboutUs from "../components/AboutUs";
import HeroVideo from "../components/HeroVideo";
import OfferComponent from "../components/Offer";



const HomepageContainer = styled.main`
display: grid;
grid-template-rows: 1fr 750px 400px 1fr 100px 1fr;

`







function Homepage(){
    return(
        <HomepageContainer>
         <HeroVideo/>
        <AboutUs/>
        <OfferComponent/>
        </HomepageContainer>
    )
}

export default Homepage
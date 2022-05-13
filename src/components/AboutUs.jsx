import styled from "styled-components";
import Logo from "../images/logo_activelife.png";
import { rem } from "polished";

const AboutUsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem("200px")}, 1fr));
  height: ${rem("600px")};
  place-items: center;
  grid-gap: ${rem("50px")};
  color: ${(props) => props.theme.colors.blue};

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  p {
    text-align: center;
  }

  .aboutUsInformation {
    display: grid;
    place-items: center;
    grid-gap: ${rem("10px")};
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer className="container80" id="aboutUs">
      <div className="aboutUsInformation">
        <h2>About Us</h2>
        <h3>ARC 21/279</h3>
        <p>
          Coxhoe Trail Run 7th Successful Year Running A scenic route full of
          interest and undulating over old railway lines and quarry paths
          between Coxhoe and Kelloe in County Durham. Start at Public byway
          (Coxhoe Hall), enter the path leading to Old Kelloe Way and follow the
          signposted Limestone LinX route (loop-shaped), ending back near the
          start point. Route
        </p>
      </div>
      <img src={Logo} alt="" />
    </AboutUsContainer>
  );
};
export default AboutUs;

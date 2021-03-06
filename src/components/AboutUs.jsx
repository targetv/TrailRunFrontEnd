import styled from "styled-components";
import Logo from "../images/logo_activelife.png";
import { rem } from "polished";

const AboutUsContainer = styled.section`
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(${rem("200px")}, 400px));
  }

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

  img {
    padding-bottom: 20px;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer className="container80" id="aboutUs">
      <div className="aboutUsInformation">
        <h2>About Us</h2>
        <h3>ARC 22/385</h3>
        <p>
          Coxhoe Trail Run 8th Successful Year Running A scenic route full of
          interest and undulating over old railway lines and quarry paths
          between Coxhoe and Kelloe in County Durham. Start at Public byway
          (Coxhoe Hall), enter the path leading to Old Kelloe Way and follow the
          signposted Limestone LinX route (loop-shaped), ending back near the
          start point. Route
        </p>
      </div>
      <img
        src="https://amplify-amplifyfb85194f54d24-staging-165405-deployment.s3.eu-west-2.amazonaws.com/trailrunmap.jpeg"
        width={450}
        height={300}
      />
    </AboutUsContainer>
  );
};
export default AboutUs;

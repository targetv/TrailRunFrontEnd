import { Button } from "./Button";
import Video from "../images/trail-run.mp4";
import styled from "styled-components";
import { rem } from "polished";

const HeroVideoSection = styled.section`
  position: relative;
  display: grid;
  height: calc(100vh - ${rem("70px")});
  align-items: center;

  video {
    height: calc(100vh - ${rem("100px")});
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: -2;
  }

  .videoFilter {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    position: absolute;
    z-index: -1;
  }

  .overlayText {
    display: grid;
    grid-gap: ${rem("10px")};

    h1 {
      font-size: 3.5rem;
      color: white;
    }
  }
`;

const HeroVideo = () => {
  return (
    <HeroVideoSection>
      <div className="videoFilter" />
      <video src={Video} loop muted autoPlay />
      <div className="overlayText container80">
        <h1>
          Coxhoe Trail Run 2022 <br /> Registrations Open{" "}
        </h1>
        <Button href="#registraion">Register Today</Button>
      </div>
    </HeroVideoSection>
  );
};

export default HeroVideo;

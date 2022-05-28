import { Button } from "./Button";
import styled from "styled-components";
import { rem } from "polished";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

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
    h1:nth-child(3) {
      color: orange;
    }
  }
`;

const HeroVideo = () => {
  return (
    <HeroVideoSection>
      <div className="videoFilter" />
      <video
        src={
          "https://amplify-amplifyfb85194f54d24-staging-165405-deployment.s3.eu-west-2.amazonaws.com/trail-run.mp4"
        }
        loop
        muted
        autoPlay
      />
      <div className="overlayText container80">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Coxhoe Trail Run
        </motion.h1>

        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          25th September 2022
        </motion.h1>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Registrations Open{" "}
        </motion.h1>

        <Button
          href="#registraion"
          as={motion.a}
          animate={{ x: 0 }}
          initial={{ x: "-100vw" }}
        >
          Register Today
        </Button>
      </div>
    </HeroVideoSection>
  );
};

export default HeroVideo;

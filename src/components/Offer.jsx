import styled from "styled-components";
import { FaAward, FaTshirt } from "react-icons/fa";
import { rem } from "polished";

const OfferSection = styled.section`
  background-color: ${(props) => props.theme.colors.blue};

  .offerSection {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${rem("200px")}, 1fr));
    place-items: center;
    height: 100%;

    @media screen and (max-width: ${rem("700px")}) {
      grid-template-rows: auto;
      grid-gap: ${rem("20px")};
    }
  }

  .icon {
    font-size: ${rem("75px")};
    fill: ${(props) => props.theme.colors.white};
  }

  .col {
    display: grid;
    place-items: center;
    grid-gap: ${rem("10px")};
  }

  h4 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

function OfferComponent() {
  return (
    <OfferSection>
      <div className="container80 offerSection">
        <div className="col">
          <FaAward className="icon" /> <h4>8 Succesful Years</h4>{" "}
        </div>
        <div className="col">
          <FaTshirt className="icon" />
          <h4>Trail Run T-shirt</h4>
        </div>
        <div className="col">
          <FaTshirt className="icon" />
          <h4>Fully Marshalled</h4>
        </div>
      </div>
    </OfferSection>
  );
}
export default OfferComponent;

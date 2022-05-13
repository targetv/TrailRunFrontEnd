import styled from "styled-components";
import { rem } from "polished";

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: ${rem("75px")};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Active Life Coxhoe</h3>
    </FooterContainer>
  );
};
export default Footer;

/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../images/logo_activelife.png";
import { Button } from "./Button";
import { useLocation, useHistory } from "react-router";
import { rem } from "polished";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 2fr 7fr 1fr 2fr;
  place-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;

  img {
    width: ${rem("144px")};
    height: ${rem("70px")};
  }

  li {
    display: inline-block;
    margin-left: ${rem("20px")};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .icon {
    font-size: ${rem("35px")};
  }

  .fillBlue {
    fill: ${(props) => props.theme.colors.blue};
    :hover {
      fill: ${(props) => props.theme.colors.yellow};
    }
  }
  button {
    border: none;
    background: none;
  }

  .outlineBlue {
    color: ${(props) => props.theme.colors.blue};
    :hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;

const NavButtons = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

function Header({ setModal, modalOn, userLoggedIn }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      {location.pathname === "/home" ? (
        <nav>
          <ul>
            <li>
              <NavButtons href="#aboutUs">About Us</NavButtons>
            </li>
            <li>
              <NavButtons href="#sponsors">Sponsors</NavButtons>
            </li>
            <li>
              <NavButtons href="#location">Location</NavButtons>
            </li>
            <li>
              <NavButtons href="#registraion">Registration</NavButtons>
            </li>
          </ul>
        </nav>
      ) : (
        <h3>Welcome</h3>
      )}

      <Button
        onClick={() => {
          setModal(!modalOn);
        }}
      >
        {userLoggedIn ? "Sign Out " : "Sign In"}
      </Button>

      <ul>
        <li>
          <button
            onClick={() => {
              history.push("/home");
            }}
          >
            <FaHome className="icon fillBlue" />
          </button>
        </li>
        <li>
          <HiOutlineMail className="icon outlineBlue" />
        </li>
      </ul>
    </HeaderContainer>
  );
}
export default Header;

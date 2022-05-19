import styled from "styled-components";
import { Button } from "./Button";
import { useHistory } from "react-router";
import { rem } from "polished";

const RegistrationSection = styled.section`
  display: grid;
  grid-template-rows: ${rem("100px")} ${rem("300px")};
  place-items: center;
  grid-gap: ${rem("20px")};

  h2 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.blue};
  }

  .cardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${rem("300px")}, 1fr));
    grid-gap: ${rem("20px")};
    width: 100%;
    height: 100%;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: ${rem("300px")};
    height: ${rem("300px")};
    place-self: center;
    border-radius: ${rem("10px")};
    padding: ${rem("20px")};
    display: grid;
    place-items: center;

    ul {
      list-style-type: none;
    }
    li {
      text-align: center;
      margin-bottom: ${rem("5px")};
    }

    p {
      display: grid;
      place-items: center;
      background-color: ${(props) => props.theme.colors.yellow};
      color: ${(props) => props.theme.colors.blue};
      padding: ${rem("25px")};
      border-radius: 50%;
      height: ${rem("90px")};
      width: ${rem("90px")};

      font-size: 1.5rem;
    }

    .none {
      display: none;
    }
  }
`;

const RegistrationComponent = ({ cost, setItem }) => {
  const history = useHistory();

  const priceSelect = (event) => {
    const item = event.target.lastChild.innerHTML;
    setItem(item);
    history.push("/register");
  };

  return (
    <RegistrationSection className="container80" id="registraion">
      <h2>Registration</h2>
      <div className="cardsContainer">
        <div className="card">
          <h3>Club Member</h3>
          <p>£12</p>
          <ul>
            <li>Entry</li>
            <li>Trail Run T-shirt</li>
          </ul>
          <Button onClick={priceSelect}>
            Register <span className="none">Club Member</span>
          </Button>
        </div>
        <div className="card">
          <h3>None Club Member</h3>
          <p>£14</p>
          <ul>
            <li>Entry</li>
            <li>Trail Run T-shirt</li>
          </ul>
          <Button onClick={priceSelect}>
            Register <span className="none">None Club Member</span>
          </Button>
        </div>
        <div className="card">
          <h3>On The Day</h3>
          <p>£15</p>
          <ul>
            <li>Entry</li>
            <li>Trail Run T-shirt</li>
          </ul>
        </div>
      </div>
    </RegistrationSection>
  );
};
export default RegistrationComponent;

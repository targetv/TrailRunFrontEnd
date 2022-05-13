import styled from "styled-components";
import { rem } from "polished";

export const Button = styled.a`
  width: ${rem("150px")};
  padding: 0.75rem 0.9rem;
  background-color: var(--blue);
  text-align: center;
  border-radius: 0.6rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.yellow};

  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

export const FormInput = styled.input`
  width: 80%;
  padding: 0.9rem;
  font-size: 1.2rem;
  border-radius: 1.3rem;
  border: 0.5px solid lightgrey;

  :focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, ${rem("50px")});
  grid-gap: ${rem("30px")};
  place-self: center;
  width: 100%;
`;

export const SmallButton = styled.a`
  padding: ${rem("5px")};
  background-color: ${(props) => props.Color || "green"};
  border-radius: ${rem("5px")} ${rem("7px")};
  color: white;

  :hover {
    background-color: ${(props) => props.HoverBackground || "White"};
    border: 1px solid green;
    color: green;
  }
`;

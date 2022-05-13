/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { FormInput, Button, Form } from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router";
import { rem } from "polished";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(130, 130, 130, 0.8);
  position: fixed;
  display: grid;
  z-index: 100;
`;

const ModalContainer = styled.section`
  width: ${rem("500px")};
  height: ${rem("400px")};
  background-color: ${(props) => props.theme.colors.white};
  display: grid;
  border-radius: ${rem("10px")};
  position: relative;
  place-self: center;

  .iconButton {
    font-size: 1.8rem;

    position: absolute;
    top: ${rem("10px")};
    right: ${rem("10px")};

    .icon {
      fill: ${(props) => props.theme.colors.yellow};
    }
  }
`;

const Modal = ({ modalOn, setModal, setUserLoggedIn }) => {
  const [adminLogin, setAdminLogin] = useState({ email: "", password: "" });
  const apiUrl = process.env.REACT_APP_API_URL;
  const history = useHistory();

  const handleChange = (event) => {
    const eventTarget = event.target;
    const name = eventTarget.name;
    const value = eventTarget.value;

    setAdminLogin({ ...adminLogin, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();

    fetch(`${apiUrl}/AdminLogin`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminLogin),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          return;
        }
      })
      .then((user) => {
        setUserLoggedIn(user);
        setAdminLogin({ email: "", password: "" });
        setModal(false);
        history.push("/dashboard");
      });
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <a className="iconButton" onClick={() => setModal(false)}>
          <AiOutlineClose className="icon" />
        </a>
        <Form onSubmit={formSubmit}>
          <FormInput
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={adminLogin.email}
          />
          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={adminLogin.password}
          />
          <Button onClick={formSubmit}>Sign In</Button>
        </Form>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;

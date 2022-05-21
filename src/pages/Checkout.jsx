import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import CheckoutForm from "./CheckoutForm";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutContainer = styled.section`
  display: grid;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 20px;
`;

const PaymentTitle = styled.h2`
  place-self: center;
  color: ${(props) => props.theme.colors.blue};
`;

const SubFields = styled.h3`
  place-self: start;

  color: ${(props) => props.theme.colors.blue};
`;

const PaymentApp = styled.section`
  height: 100vh;
`;

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPEPK);

export default function App({ item, userId }) {
  const itemsList = { "None Club Member": "£14", "Club Member": "£12" };
  const [clientSecret, setClientSecret] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (email !== "") {
      if (!process.env.REACT_APP_EXPRESS) {
        return;
      }
      fetch(`${process.env.REACT_APP_EXPRESS}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ item, email }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [email]);

  const USERBYID = gql`
    query User($input: GetUserById) {
      UserById(input: $input) {
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(USERBYID, {
    variables: { input: { id: userId.current } },
  });

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return "Error";
  }
  if (data && email === "") {
    setEmail(data?.UserById?.email);
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <PaymentApp>
      {clientSecret && (
        <CheckoutContainer>
          <PaymentTitle>Coxhoe Trail Run</PaymentTitle>
          <SubFields>Email: {email}</SubFields>
          <SubFields>Item: {item}</SubFields>
          <SubFields>Price: {itemsList[item]}</SubFields>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm userId={userId} />
          </Elements>
        </CheckoutContainer>
      )}
    </PaymentApp>
  );
}

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import styled from "styled-components";
import { rem } from "polished";
import CircularProgress from "@mui/material/CircularProgress";

const CheckoutFormEl = styled.form`
  display: grid;
  grid-gap: 15px;
`;

const CheckoutButton = styled.button`
  width: ${rem("150px")};
  padding: 0.75rem 0.9rem;
  background-color: ${(props) => props.theme.colors.blue};
  text-align: center;
  border-radius: 0.6rem;
  text-decoration: none;
  font-size: 16px;
  border: none;
  color: ${(props) => props.theme.colors.yellow};

  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

export default function CheckoutForm({ userId }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${url}/paymentconfirmation/${userId.current}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <CheckoutFormEl id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {!isLoading ? (
        <CheckoutButton
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">Pay now</span>
        </CheckoutButton>
      ) : (
        <CircularProgress />
      )}

      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </CheckoutFormEl>
  );
}

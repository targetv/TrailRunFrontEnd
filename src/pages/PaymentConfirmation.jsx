import { gql, useMutation, useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useParams } from "react-router";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import styled from "styled-components";
import SponsorsComponent from "../components/Sponsors";
import GoogleMaps from "../components/Googlemaps";

const PaymentConfContainer = styled.section`
  display: grid;
  height: 100vh;
  grid-template-rows: 75px repeat(2, 1fr);
  grid-gap: 10px;
`;

const PaymentConfirmation = () => {
  const UPDATEPAYMENTSTATUS = gql`
    mutation UpdatePaymentStatus($input: GetUserById) {
      UpdatePaymentStatus(input: $input) {
        success
      }
    }
  `;

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [updateStatus, { loading, error }] = useMutation(UPDATEPAYMENTSTATUS);

  const USER = gql`
    query User($input: GetUserById) {
      UserById(input: $input) {
        firstname
        lastname
        email
        dob
        address
        postcode
        telephonenumber
        gender
        ageonraceday
        shirtsize
        signature
        clubname
        clubmember
        registrationnumber
      }
    }
  `;
  const { refetch } = useQuery(USER);
  const { userId } = useParams();
  const stripe = useStripe();
  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!userId) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(async ({ paymentIntent }) => {
        if (paymentIntent.status === "succeeded" && userId) {
          setPaymentSuccess(true);
          await updateStatus({
            variables: { input: { id: userId } },
          });

          const user = await refetch({
            input: { id: userId },
          });

          await fetch(`${process.env.REACT_APP_EXPRESS}/confirmedpayment`, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
        }
      });
  }, [stripe]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <PaymentConfContainer>
      {paymentSuccess && (
        <Alert severity="success" className="container80">
          <AlertTitle>Success</AlertTitle>
          Your Registration To Coxhoe Trail Run 2022 Has Been Successful!{" "}
          <strong>
            Please Check Your Emails For Your Payment Confirmation
          </strong>
        </Alert>
      )}
      <GoogleMaps />
      <SponsorsComponent />
    </PaymentConfContainer>
  );
};

export default PaymentConfirmation;

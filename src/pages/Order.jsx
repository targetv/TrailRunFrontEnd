import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Typography } from "@mui/material";

const PayPalButtonsContainer = styled.div`
  display: grid;
  .buttons {
    display: grid;
    place-items: center;
    width: 60%;
    place-self: center;
  }
`;

const initialOptions = {
  "client-id": "test",
  currency: "GBP",
  intent: "capture",
};

const OrderPageContainer = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  place-self: center;
`;

const RightColumn = styled.div`
  display: grid;
  place-items: center;

  ul {
    list-style-type: none;
  }

  div {
    text-align: center;
  }
`;

function Order({ PayPalScriptProvider, PayPalButtons, orderId }) {
  const history = useHistory();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3030/find-order", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...orderId }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.product);
      });
  }, [orderId]);

  return (
    <OrderPageContainer className="container80">
      <PayPalButtonsContainer>
        <PayPalScriptProvider options={initialOptions} className="container">
          <PayPalButtons
            className="buttons"
            createOrder={() => {
              let orderInformation = null;
              let product = null;

              return fetch("http://localhost:3030/find-order", {
                credentials: "include",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...orderId }),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  orderInformation = data.id;
                  product = data.product;

                  return fetch("http://localhost:3030/create-order", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      items: [
                        {
                          id: orderInformation,
                          product: product,
                        },
                      ],
                    }),
                  })
                    .then((res) => {
                      console.log("Response", res);
                      if (res.ok) return res.json();
                      return res.json().then((json) => Promise.reject(json));
                    })
                    .then(({ id }) => {
                      return id;
                    })
                    .catch((e) => {
                      console.log(e.error);
                    });
                });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((order) => {
                const paymentInformation = {
                  orderid: orderId.id,
                  payeremail: order.payer.email_address,
                  payername: `${order.payer.name.given_name} ${order.payer.name.surname}`,
                  payerpaypalid: order.payer.payer_id,
                  paymentid: order.purchase_units[0].payments.captures[0].id,
                  paymenttime:
                    order.purchase_units[0].payments.captures[0].create_time,
                  paymentstatus:
                    order.purchase_units[0].payments.captures[0].status,
                  paymentrefundlink:
                    order.purchase_units[0].payments.captures[0].links[1].href,
                  paymentorderlink:
                    order.purchase_units[0].payments.captures[0].links[2].href,
                };

                fetch("http://localhost:3030/payment-status", {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(paymentInformation),
                })
                  .then((resp) => resp.json())
                  .then((data) => {
                    data.paymentstatus === "COMPLETED"
                      ? history.push("/paymentsuccess")
                      : history.push("/paymentfailed");
                  });
              });
            }}
          />
        </PayPalScriptProvider>
      </PayPalButtonsContainer>
      <RightColumn>
        <Typography variant="h4" component="div" gutterBottom>
          Order Id {orderId.id}
        </Typography>
        <div>
          <Typography variant="h5" component="div" gutterBottom>
            Cart
          </Typography>
          <ul>
            <li>{`${product.productname} £${product.productprice}`}</li>
          </ul>
        </div>
      </RightColumn>
    </OrderPageContainer>
  );
}

export default Order;

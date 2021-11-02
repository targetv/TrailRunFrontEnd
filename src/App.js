/* eslint-disable react-hooks/exhaustive-deps */
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import RegistrationForm from "./pages/RegistrationForm";
import PaymentFailed from "./pages/PaymentFailed";
import PaymentSuccess from "./pages/PaymentSuccess";

import Order from "./pages/Order";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const [modalOn, setModal] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Product Id State
  const [cost, setCost] = useState(0);

  const [orderId, setOrderId] = useState(0);

  const history = useHistory();

  const apiUrl = process.env.API_URL;

  console.log(apiUrl);
  useEffect(() => {
    const token = Cookies.get("token");
    fetch(`${apiUrl}/ValidateToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(token),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          return false;
        }
      })
      .then((user) => {
        setUserLoggedIn(user);
        history.push("/dashboard");
      });
  }, []);

  return (
    <div className={modalOn ? "App modalOn" : "App"}>
      <Header
        setModal={setModal}
        modalOn={modalOn}
        userLoggedIn={userLoggedIn}
      />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Homepage
            modalOn={modalOn}
            setModal={setModal}
            setUserLoggedIn={setUserLoggedIn}
            setCost={setCost}
            cost={cost}
          />
        </Route>
        <Route path="/order">
          <Order
            PayPalScriptProvider={PayPalScriptProvider}
            PayPalButtons={PayPalButtons}
            orderId={orderId}
            setOrderId={setOrderId}
          />
        </Route>
        <Route path="/dashboard">
          {userLoggedIn ? <AdminDashboard /> : <Redirect to="/home" />}
        </Route>
        <Route path="/register">
          <RegistrationForm cost={cost} setOrderId={setOrderId} />
        </Route>
        <Route path="/paymentsuccess">
          <PaymentSuccess />
        </Route>
        <Route path="/paymentfailed">
          <PaymentFailed />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

/* eslint-disable react-hooks/exhaustive-deps */
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { useState, useRef } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import RegistrationForm from "./pages/RegistrationForm";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { Helmet } from "react-helmet";

import Checkout from "./pages/Checkout";

// import Cookies from "js-cookie";
import { useHistory } from "react-router";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPEPK);

function App() {
  const [modalOn, setModal] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Product Id State
  const userId = useRef("");
  const [item, setItem] = useState("");

  // const apiUrl = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   fetch(`${apiUrl}/ValidateToken`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //     body: JSON.stringify(token),
  //   })
  //     .then((resp) => {
  //       if (resp.ok) {
  //         return resp.json();
  //       } else {
  //         return false;
  //       }
  //     })
  //     .then((user) => {
  //       setUserLoggedIn(user);
  //       history.push("/dashboard");
  //     });
  // }, []);

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Coxhoe Trail Run</title>
      </Helmet> */}
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
              setItem={setItem}
              item={item}
            />
          </Route>
          <Route path="/checkout">
            <Checkout item={item} userId={userId} />
          </Route>
          <Route path="/dashboard">
            {/* {userLoggedIn ? <AdminDashboard /> : <Redirect to="/home" />} */}
            <AdminDashboard />
          </Route>
          <Route path="/register">
            <RegistrationForm item={item} userId={userId} />
          </Route>
          <Route path="/paymentconfirmation/:userId">
            <Elements stripe={stripePromise}>
              <PaymentConfirmation userId={userId} />
            </Elements>
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;

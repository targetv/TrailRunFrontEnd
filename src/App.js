import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [modalOn, setModal] = useState(false);

  return (
    <div className={modalOn ? "App modalOn" : "App"}>
      <Header setModal={setModal} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Homepage modalOn={modalOn} setModal={setModal} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

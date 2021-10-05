import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [modalOn, setModal] = useState(false);

  return (
    <div className={modalOn ? "App modalOn" : "App"}>
      <Header setModal={setModal} modalOn={modalOn} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Homepage modalOn={modalOn} setModal={setModal} />
        </Route>
        <Route path="/dashboard">
          <AdminDashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

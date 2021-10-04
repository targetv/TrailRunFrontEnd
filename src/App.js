import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
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

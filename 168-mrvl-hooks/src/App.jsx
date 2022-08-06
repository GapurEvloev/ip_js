import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppHeader from "./components/appHeader/AppHeader";

import {Main, Comics} from "./pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/comics">
              <Comics/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;

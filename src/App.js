import React from "react";
import "./style.css";

import Newform from "./components/Newform";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import Nomatch from "./components/Nomatch";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/add" component={Newform} />
        <Route exact path="/" component={ContactList} />
        <Route exact path="/edit/:id" component={EditContact} />
        <Route exact component={Nomatch} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import Layout from "./containers/Layout/Layout";
import Treasure from "./containers/TreasureGame/Treasure";
import TicTacToe from "./containers/TicTacToeGame/TicTacToe";
import Home from "./containers/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/treasure" exact component={Treasure} />
        <Route path="/tictactoe" exact component={TicTacToe} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;

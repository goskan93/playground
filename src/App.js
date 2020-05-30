import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.css";

const Treasure = React.lazy(() => import("./containers/TreasureGame/Treasure"));
const TicTacToe = React.lazy(() => import("./containers/TicTacToeGame/TicTacToe"));
const Memory = React.lazy(() => import("./containers/MemoryGame/Memory"));

const routes = [
  { path: "/", Component: Home },
  { path: "/tictactoe", Component: TicTacToe },
  { path: "/treasure", Component: Treasure },
  { path: "/memory", Component: Memory },
];

function App() {
  return (
    <Layout>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

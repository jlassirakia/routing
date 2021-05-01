import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/movie-details/:id" component={MovieDetails} exact />
    </Router>
  );
}

export default App;

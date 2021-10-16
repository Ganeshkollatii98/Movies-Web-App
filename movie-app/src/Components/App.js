import React from "react";
import MovieListContainer from "./MovieListContianer";
import Navbar from "./Navbar";
import { addMovies } from "../Actions/index";
import data from "../Components/data.json";

class App extends React.Component {
  componentDidMount() {
    console.log("Did Mount");
    // Subscribe function
    this.props.store.subscribe(() => {
      console.log("STORE Subscribed");
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data.items));
    console.log("STATE", this.props.store.getState());
  }

  render() {
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <MovieListContainer MoviesData={this.props.store.getState()} />
      </div>
    );
  }
}

export default App;

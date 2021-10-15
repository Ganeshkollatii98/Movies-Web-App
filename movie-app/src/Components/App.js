import React from "react";
import MovieListContainer from "./MovieListContianer";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.API_KEY = "k_9g000ipe";
    this.URL = "https://imdb-api.com/en/API/Top250Movies/";
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  componentDidMount() {
    fetch(this.URL + this.API_KEY)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("IMDB Result", result);
          console.log("APP STORE", this.props.store.getState());
          //sending data via dispatch
          console.log("Movies Result", result.items);
          this.props.store.dispatch({
            type: "ADD_MOVIES",
            movies: result.items,
          });
          console.log("APP After STORE", this.props.store.getState());
         
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
 

  render() {
    //console.log("im in render", this.state.items);
    return (
      <div className="App">
        <Navbar />
        <MovieListContainer MoviesData={this.props.store.getState()} />
      </div>
    );
  }
}

export default App;

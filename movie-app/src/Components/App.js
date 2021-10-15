import React from "react"
import MovieListContainer from "./MovieListContianer";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.API_KEY="k_f35ui0za"
    this.URL="https://imdb-api.com/en/API/Top250Movies/"
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    
  }

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  componentDidMount() {
    fetch(this.URL+this.API_KEY)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("IMDB Result",result)
          this.setState({
            isLoaded: true,
            items: result.items
          });
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  getImdbData=()=>{
       console.log(this.state.items)
  }
  
  render (){
    console.log("im in render",this.state.items)
    return (
      <div className="App">
           <Navbar/>
           <MovieListContainer MoviesData={this.state.items}/>
      </div>
    );
  }
 
}

export default App;

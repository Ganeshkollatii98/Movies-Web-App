import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { addMovies ,showFavourite} from "../Actions";
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
  isFavourite=(movie)=>{
    const {favourites}=this.props.store.getState();
    const index=favourites.indexOf(movie)
    if(index!==-1){
      return true;
    }
    return false;
 }
 onChangeTab=(boolVal)=>{
  console.log("Changed Tab",boolVal)
  this.props.store.dispatch(showFavourite(boolVal))
  
}

  render() {
    console.log("RENDER");
    const {movieList,favourites,setFavourite}=this.props.store.getState()
    console.log("Fav SET",this.props.store.getState())
    const displayMovies= setFavourite ? favourites : movieList;
    console.log("Display Movies",displayMovies)

    return (
      <div className="App">
        <Navbar />
       
         <div className="MovieList flex items-center flex-col  h-auto w-full">
         <div className="tabs items-start m-5 flex text-3xl ">
             <div className={`tab-1 p-3 ${setFavourite ? '' : 'bg-gray-500  rounded  transition duration-1000' }` } onClick={()=>this.onChangeTab(false)}>Movies</div>
             <div className={`tab-2 p-3 ${setFavourite ? 'bg-gray-500  rounded transition duration-1000' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
         </div>
        
          { displayMovies.map((movie,index)=>{
            return <MovieList  Movie={movie} store={this.props.store} isFavourite={this.isFavourite(movie)} key={index} />
           })}
           {displayMovies.length===0 ? <div className="text-2xl ">No Movies Added To Favourite</div> : null}
        </div>
       
      </div>
    );
  }
}

export default App;

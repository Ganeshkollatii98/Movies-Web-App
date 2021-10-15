import MovieList from "./MovieList";

// import "./styles/MovieListContainer.css"
const MovieListContainer =(props) =>{
     
    return(
        <div className="MovieList flex items-center flex-col  h-auto w-full">
         <div className="tabs items-start flex text-3xl ">
             <div className="tab-1 bg-gray-500 m-5 rounded p-3 transition duration-1000  hover:bg-white hover:text-red-500">Movies</div>
             <div className="tab-2 bg-gray-500 my-5  p-3 rounded transition duration-1000 hover:bg-white  hover:text-red-500 ">Favourites</div>
         </div>

          { props.MoviesData.map((movie,index)=>{
            return <MovieList  Movie={movie} key={index}/>
           })}
        </div>
        
    );
}
export default MovieListContainer;
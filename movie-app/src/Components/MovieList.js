

var MovieList=(props)=>{
    var handleFavouritesButton=(movie)=>{
          console.log("clicked fav",movie)
    }
    return(
             <div className="MovieCard shadow-md bg-gray-300 flex  w-8/12 h-48    border m-3">
                <div className="image w-2/4  h-full">
                    <img  className="w-full h-full object-fit" alt="poster" src={props.Movie.image}/>
                </div>

                <div className="movie-data w-full flex flex-col justify-between m-5 text-base text-gray-700">
                    <div className="title text-xl font-bold">
                       {props.Movie.fullTitle}
                    </div>
                    <div className="discription">
                    {props.Movie.crew}
                    </div>
                    <div className="rating">
                         {props.Movie.imDbRating}
                    </div>
                    <div className="flex flex-row-reverse">
                      {
                        
                      }
                  <button type="submit" className="bg-blue-500 p-3 w-2/4" onClick={()=>handleFavouritesButton(props.Movie)}>Favourite</button>
                    </div>
                </div>
               
              </div>
        
    );
}
export default MovieList;
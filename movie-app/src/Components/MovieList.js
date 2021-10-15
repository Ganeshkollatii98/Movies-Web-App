

var MovieList=(props)=>{
    
    return(
             <div className="MovieCard shadow bg-gray-300 flex  w-11/12 h-30    border m-3">
                <div className="image w-2/4  h-full">
                    <img  className="w-full h-full" alt="poster" src={props.Movie.image}/>
                </div>

                <div className="movie-data w-full flex flex-col justify-between  ">
                    <div className="title">
                       {props.Movie.fullTitle}
                    </div>
                    <div className="discription">
                    {props.Movie.crew}
                    </div>
                    <div className="rating">
                         {props.Movie.imDbRating}
                    </div>
                  <button type="submit" className="bg-blue-500 p-3 w-2/4">Favourite</button>
                </div>
               
              </div>
        
    );
}
export default MovieList;
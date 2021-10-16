import { addFavorites } from "../Actions";


var MovieList=(props)=>{
    var {Movie,store,isFavourite}=props;
 
    var handleFavouritesClicked=(Movie)=>{
          console.log("clicked fav",Movie)
          store.dispatch(addFavorites(Movie))
          const {favourites}=store.getState()
          console.log("Favroties",favourites)
    }
    return(
             <div className="MovieCard shadow-md bg-gray-300 flex  w-8/12 h-48    border m-3">
                <div className="image w-2/4  h-full">
                    <img  className="w-full h-full object-fit" alt="poster" src={Movie.image}/>
                </div>

                <div className="Movie-data w-full flex flex-col justify-between m-5 text-base text-gray-700">
                    <div className="title text-xl font-bold">
                    {Movie.fullTitle}
                    </div>
                    <div className="discription">
                {Movie.crew}
                    </div>
                    <div className="rating">
                        {Movie.imDbRating}
                    </div>
                    <div className="flex flex-row-reverse">
                      {
                        isFavourite ? <button type="submit" className="bg-green-500 p-3 w-2/4" >UnFavourite</button> :
                        <button type="submit" className="bg-blue-500 p-3 w-2/4" onClick={()=>handleFavouritesClicked(Movie)}>Favourite</button>
                      }
                  
                    </div>
                </div>
               
              </div>
        
    );
}
export default MovieList;
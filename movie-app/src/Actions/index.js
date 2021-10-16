
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVORITES="ADD_FAVORITES";

//adding movies to movie list with action
export function addMovies(movies){
    
    return {
        type:"ADD_MOVIES",
        movies
    }
}
// Adding Favourites
export function addFavorites(movies){
   return {
       type:"ADD_FAVORITES",
       movies
   }
}

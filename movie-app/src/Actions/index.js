
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVORITES="ADD_FAVORITES";
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const SET_FAVOURITE="SET_FAVOURITE";
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

export function removeFavorite(movie){
    return {
        type:"REMOVE_FAVORITE",
        movie
    }
}
export function showFavourite(boolVal){
    return {
        type:"SET_FAVOURITE",
        boolVal
    }
}
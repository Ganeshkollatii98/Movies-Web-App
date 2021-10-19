import {
  ADD_MOVIES,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
  SET_FAVOURITE,
} from "../Actions/index";

const initialMoviesState = {
  movieList: [],
  favourites: [],
  setFavourite: false,
};
export function movies(state = initialMoviesState, actions) {
  console.log("Reducers", actions);
  switch (actions.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movieList: actions.movies,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favourites: [actions.movies, ...state.favourites],
      };
    case REMOVE_FAVORITE:
      const filterArray = state.favourites.filter((movie) => {
        return movie.title !== actions.movie.title;
      });
      return {
        ...state,
        favourites: filterArray,
      };
    case SET_FAVOURITE:
      console.log("Actions", actions);
      return {
        ...state,
        setFavourite: actions.boolVal,
      };

    default:
      return state;
  }
}

// Search Reducer
const initialSearchState={
  result:{}
}
export const search=(state,action)=>{
    return state;
}
// Root Reducer
const initialRootState={
  movies:initialMoviesState,
  search:initialSearchState
}
export default function rootReducer(state,action){
            return {
              movie:movies(state.movies,action),
              search:search(state.search,action)
            }
}
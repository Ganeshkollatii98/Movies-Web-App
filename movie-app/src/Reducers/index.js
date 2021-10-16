import { ADD_MOVIES, ADD_FAVORITES } from "../Actions/index";

const initialMoviesState = {
  movieList: [],
  favourites: [],
};
export default function movies(state = initialMoviesState, actions) {
  //    if(actions.type==='ADD_MOVIES')
  //    {
  //        return {
  //            ...state,
  //            movieList:actions.movies
  //        };
  //    }
  //    return state;

  switch (actions.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movieList: actions.movies,
      }
    case ADD_FAVORITES:
        return {
            ...state,
            favourites:[actions.movies,...state.favourites]
        }
    default:
      return state;

  }
}


const initialMoviesState={
    movieList:[],
    favourites:[]
}
export default function movies(state=initialMoviesState,actions)
{
   if(actions.type==='ADD_MOVIES')
   {
       return {
           ...state,
           movieList:actions.movies
       };
   }
   return state;
}
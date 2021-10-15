export default function movies(state=[1,2,3,4,5],actions)
{
   if(actions.type==='ADD_MOVIES')
   {
       return actions.movies;
   }
   return state;
}
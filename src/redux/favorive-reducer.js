import { usersAPI } from "../api/api";
import { addFavoriteEvent, addFavoriteExpert, addFavoritePost, addFavoriteVideo, removeFavoriteEvent, removeFavoriteExpert, removeFavoritePost, removeFavoriteVideo } from '../redux/auth-reducer';

const TOGGLE_FAVOFITE_BUTTON = 'TOGGLE_FAVOFITE_BUTTON';
const FAVORITE = 'FAVORITE';
const UNFAVORITE = 'UNFAVORITE';

let initialState = {
  favoriteExpertsButtonProgress: [], 
  favoriteExpertsState: [],    
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOFITE_BUTTON:
      return {
        ...state,
        favoriteExpertsButtonProgress: action.isFetching 
          ? Array.from(new Set([...state.favoriteExpertsButtonProgress, action.id]))
          : state.favoriteExpertsButtonProgress.filter(id => id !== action.id)
      };
    case FAVORITE:
      return {
        ...state,
        favoriteExpertsState: Array.from(new Set([...state.favoriteExpertsState, action.id]))
      };
    case UNFAVORITE:
      return {
        ...state,
        favoriteExpertsState: state.favoriteExpertsState.filter(id => id !== action.id)
      };      
    default:
      return state;
  }
}

export const toggleFavoriteProgress = (isFetching, id) => {
  return {
    type: TOGGLE_FAVOFITE_BUTTON,
    isFetching,
    id
  }
}

export const addExpertFavorite = (id) => {
  return {
    type: FAVORITE,
    id
  }
}

export const removeExpertFavorite = (id) => {
  return {
    type: UNFAVORITE,
    id
  }
}

export const favoriteThunkCreator = (itemId, arrayFav, addfavorite, type = 'experts') => {
  return (dispatch) => {    

    dispatch(toggleFavoriteProgress(true, itemId));
    let favorites = addfavorite
      ? Array.from(new Set([...arrayFav, +itemId]))
      : arrayFav.filter(favId => favId !== itemId);   
    

    let data = { pro_favorites_experts: JSON.stringify(favorites) }      
    if(type === 'event'){
      data = { pro_favorites_events: JSON.stringify(favorites) }
      usersAPI.setUserData(data).then(response => {
        if (response) {        
          addfavorite 
            ? dispatch(addFavoriteEvent(itemId))
            : dispatch(removeFavoriteEvent(itemId));
        }
        dispatch(toggleFavoriteProgress(false, itemId));
      })      
    }
    if(type === 'tv_video'){
      data = { pro_favorites_video: JSON.stringify(favorites) }
      usersAPI.setUserData(data).then(response => {
        if (response) {        
          addfavorite 
            ? dispatch(addFavoriteVideo(itemId))
            : dispatch(removeFavoriteVideo(itemId));
        }
        dispatch(toggleFavoriteProgress(false, itemId));
      })      
    }
    if(type === 'post'){
      data = { pro_favorites_posts: JSON.stringify(favorites) }
      usersAPI.setUserData(data).then(response => {
        if (response) {        
          addfavorite 
            ? dispatch(addFavoritePost(itemId))
            : dispatch(removeFavoritePost(itemId));
        }
        dispatch(toggleFavoriteProgress(false, itemId));
      })      
    }
    usersAPI.setUserData(data).then(response => {
      if (response) {        
        addfavorite 
          ? dispatch(addFavoriteExpert(itemId))
          : dispatch(removeFavoriteExpert(itemId));
      }
      dispatch(toggleFavoriteProgress(false, itemId));
    });
  }  
}

export default commonReducer;
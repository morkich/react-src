import { postAPI, viewAPI } from "../api/api";

const SET_POST_DATA = 'SET_POST_DATA';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_VIEW = 'SET_VIEW';

let initialState = {
  postData: {
    title: {
      rendered: 'Загрузка...'
    },
    content: {
      rendered: 'Загрузка...'
    },
  },
  loadingPost: true,
  viewsPost: 0
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        ...state,
        postData: action.postData
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        loadingPost: action.loading
      };
    case SET_VIEW:
      return {
        ...state,
        viewsPost: action.viewsPost
      };      
    default:
      return state;
  }
}

export const setPostData = (postData) => {
  return {
    type: SET_POST_DATA,
    postData
  }
}

export const setLoading = (loading) => {
  return {
    type: TOGGLE_PRELOADER,
    loading
  }
}

export const setView = (viewsPost) => {
  return {
    type: SET_VIEW,
    viewsPost
  }
}

export const getPostDataThunk = (postId) => {
  return (dispatch) => { 
    dispatch(setLoading(true)); 
    postAPI.getPostDataById(postId).then(response => {          
      dispatch(setView(response.pro_views))
      dispatch(setPostData(response));      
      return postId;
    })
    .then( postId => {
      viewAPI.setPostLike(postId).then(response => {
        dispatch(setLoading(false)); 
      })
    })   
  }
}

export default postReducer;
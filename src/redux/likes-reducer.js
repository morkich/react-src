import { postAPI } from "../api/api";

const SET_LIKES_DATA = 'SET_LIKES_DATA';
const SET_LOADING = 'SET_LOADING';
const SET_USER_LIKE = 'SET_USER_LIKE';
const SET_USER_DISLIKE = 'SET_USER_DISLIKE';
const SET_LIKES_COUNT = 'SET_LIKES_COUNT';

let initialState = {
  likesData: {},
  likesCoint: 0,
  onLike: '',
  onDislike: '',
  likeLoading: true
}

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES_DATA:
      return {
        ...state,
        likesData: action.likesData
      };
    case SET_USER_LIKE:
      return {
        ...state,
        onLike: action.like
      }; 
    case SET_USER_DISLIKE:
      return {
        ...state,
        onDislike: action.dislike
      };                    
    case SET_LIKES_COUNT:
      return {
        ...state,
        likesCoint: action.count
      };       
    case SET_LOADING:
      return {
        ...state,
        likeLoading: action.loading
      };      
    default:
      return state;
  }
}

export const setLikesData = (likesData) => {
  return {
    type: SET_LIKES_DATA,
    likesData
  }
}

export const setUserLike = (like) => {
  return {
    type: SET_USER_LIKE,
    like
  }
}

export const setUserDislike = (dislike) => {
  return {
    type: SET_USER_DISLIKE,
    dislike
  }
}

export const setLikesCoint = (count) => {
  return {
    type: SET_LIKES_COUNT,
    count
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const getLikesDataThunk = (idPost, postType = 'posts') => { 
  return (dispatch) => {    
    dispatch(setLoading(true));
    postAPI.getPostDataById(idPost, postType).then(response => {
        if(postType === 'tv_video'){
          dispatch(setLikesData(response.pro_tv_video_like ? JSON.parse(response.pro_tv_video_like) : {}));
        }else{
          dispatch(setLikesData(response.pro_tv_video_like ? JSON.parse(response.pro_tv_video_like) : {}));
        }        
        dispatch(setLoading(false));      
    })
  }
}

export const getLikesRenderingThunk = (userId, likesData) => {
  return(dispatch) => {
    dispatch(setLoading(true));
    dispatch(setUserLike(Object.keys(likesData).some(() => likesData[userId] === true)));
    dispatch(setUserDislike(Object.keys(likesData).some(() => likesData[userId] === false)));
    dispatch(setLikesCoint(Object.keys(likesData).filter(key => likesData[key] === true).length - Object.keys(likesData).filter(key => likesData[key] === false).length));
    dispatch(setLoading(false));
  }
}

export const setLikesThunk = (postId, arrayLikes, likesFieldName = 'posts') => {
  return(dispatch) => {
    dispatch(setLoading(true));
    let data;
    if(likesFieldName === 'tv_video') data = { pro_tv_video_like: JSON.stringify(arrayLikes)};
    if(likesFieldName === 'posts') data = { pro_likes: JSON.stringify(arrayLikes)};
    postAPI.setLikesToPost(postId, data, likesFieldName).then(response => {
      if(response.status === 200){
        getLikesDataThunk(postId, likesFieldName);
        dispatch(setLoading(false));
      }else{
        dispatch(setLoading(false));
      }
    })
  }
}


export default likesReducer;
import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import postLoopReducer from "./postLoop-reducer";
import favoriteReducer from "./favorive-reducer";
import optionsReducer from "./options-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk";
import newsCardReducer from "./newsCard-reducer";
import postReducer from "./post-reducer";
import filtersReducer from "./filters-reducer";
import authorReducer from "./author-reducer";
import likesReducer from "./likes-reducer";
import tagsReducer from "./tags-reducer";
import commentsReducer from "./comments-reducer";
import menuReducer from "./menu-reducer";


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    options: optionsReducer,
    postLoop: postLoopReducer,
    newsCard: newsCardReducer,
    post: postReducer,
    filters: filtersReducer,
    author: authorReducer,
    likes: likesReducer,
    tags: tagsReducer,
    comments: commentsReducer,
    menu: menuReducer,
    form: formReducer
});
 
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import style from './Favorites.module.css';

const Favorites = (props) => {  

  let inProgress = props.favoriteExpertsButtonProgress.some(id => id === +props.expertId); 
  let inActive = props.favoriteExpertsState.some(id => id === +props.expertId);
  let buttonColor = props.darkTheme ? style.favoriteDark : 'null';

  return (
    props.loggetIn  
    ? inActive
      ? <button onClick={props.removeThisFavorite} className={`${style.favorite} ${style.unfavorite}`} disabled={inProgress}>
          {inProgress ? <Preloader /> : null}
          <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H25V32L12.5 24.4211L0 32V0Z" />
          </svg>
        </button>
      : <button onClick={props.addThisFavorite} className={`${style.favorite} ${style.addfavorite} ${buttonColor}`} disabled={inProgress}>
          {inProgress ? <Preloader /> : null}
          <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H25V32L12.5 24.4211L0 32V0Z" />
          </svg>
        </button>
    : <NavLink to="/auth" className={`${style.favorite} ${style.addfavorite} ${buttonColor}`}>      
        <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H25V32L12.5 24.4211L0 32V0Z" />
        </svg>
      </NavLink>
  );
}

export default Favorites;
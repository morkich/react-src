import React from 'react';
import style from './Experts.module.css';
import Preloader from '../common/Preloader/Preloader';
import Watermark from '../common/Watermark/Watermark';
import { NavLink } from 'react-router-dom';
import FavoritesContainer from '../common/Favorites/FavoritesContainer';
import Title from '../common/Title/Title';
import FilterContainer from '../common/Filter/FilterContainer'
import Aside from '../Aside/Aside';
import Raiting from '../Profile/Raiting/Raiting';

const Experts = (props) => {
  let pages = [];
  for (let i = 1; i <= props.totalPageCount; i++) {
    pages.push(i);
  }

  let pagesCount = pages
    .map(numberPage => {
      return <span key={numberPage}
        onClick={() => { props.onPageChange(numberPage) }}
        className={props.currentPage === numberPage ? style.active : ''}>{numberPage}
      </span>
    });

  return (
    <section className="container">
      <header className={style.header}>
        <Watermark main={true}/>   
        <Title 
          title={'Эксперты'} 
          main={true} 
          uppercase={true}
        />
        <FilterContainer />
      </header>
      <div className="pagination">
        {pagesCount}
      </div>
      <div className="content_right-aside">
        <main className={style.main}>
          {props.isLoading ? <Preloader /> : null}
          <ul className={style.experts}>
            {
              props.experts.map(expert =>
                (
                  <li key={expert.id}>
                    <div key={expert.id} className={style.expert}>
                    <FavoritesContainer expertId={expert.id} />
                      <div className={style.avatar}>
                        <img src={expert.avatar} alt="" />
                      </div>
                      <div className={style.discription}>
                        <h2><NavLink to={`/profile/${expert.id}`}>{expert.pro_lastname} {expert.pro_firstname} {expert.pro_secondname}</NavLink></h2>
                        <div className={style.work}>
                          <span>{expert.pro_position ? expert.pro_position : 'Странник'}</span>
                          <span>{expert.pro_workplace ? expert.pro_workplace : 'Всё и Вся'}</span>
                          <span className={style.city}>{expert.pro_city ? expert.pro_city : 'Человек мира'}</span>
                        </div>
                      </div>

                      <div className={style.raiting}>
                        <div>
                          <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0553 2.71301H18.985V1.20116C18.985 1.08127 18.8886 0.984131 18.7698 0.984131H0.48573C0.366841 0.984131 0.270508 1.08127 0.270508 1.20116V15.5635C0.270508 16.3422 0.898743 16.9757 1.67088 16.9757H19.9125C20.6613 16.9757 21.2705 16.3614 21.2705 15.6063V2.93004C21.2705 2.81016 21.1742 2.71301 21.0553 2.71301ZM20.8401 15.6063C20.8401 16.1221 20.424 16.5416 19.9125 16.5416C19.401 16.5416 18.985 16.1221 18.985 15.6063V15.0053C18.985 14.8854 18.8886 14.7882 18.7698 14.7882C18.6509 14.7882 18.5545 14.8854 18.5545 15.0053V15.6063C18.5545 15.9677 18.6943 16.2966 18.922 16.5416H1.67088C1.13605 16.5416 0.700953 16.1028 0.700953 15.5635V1.4182H18.5546V12.9783C18.5546 13.0982 18.6509 13.1954 18.7698 13.1954C18.8887 13.1954 18.985 13.0982 18.985 12.9783V3.14708H20.8401V15.6063H20.8401ZM9.05637 3.86537H2.19985C2.08096 3.86537 1.98463 3.96251 1.98463 4.0824V9.26778C1.98463 9.38767 2.08096 9.48481 2.19985 9.48481H9.05637C9.17526 9.48481 9.27159 9.38767 9.27159 9.26778V4.0824C9.27159 3.96255 9.17526 3.86537 9.05637 3.86537ZM8.84114 9.05075H2.41507V4.29943H8.84114V9.05075ZM9.98389 4.0824C9.98389 3.96251 10.0802 3.86537 10.1991 3.86537H17.0556C17.1745 3.86537 17.2709 3.96251 17.2709 4.0824C17.2709 4.20229 17.1745 4.29943 17.0556 4.29943H10.1991C10.0802 4.29943 9.98389 4.20229 9.98389 4.0824ZM9.98389 5.81137C9.98389 5.69148 10.0802 5.59433 10.1991 5.59433H17.0556C17.1745 5.59433 17.2709 5.69148 17.2709 5.81137C17.2709 5.93125 17.1745 6.0284 17.0556 6.0284H10.1991C10.0802 6.0284 9.98389 5.93121 9.98389 5.81137ZM9.98389 7.54029C9.98389 7.4204 10.0802 7.32326 10.1991 7.32326H17.0556C17.1745 7.32326 17.2709 7.4204 17.2709 7.54029C17.2709 7.66018 17.1745 7.75732 17.0556 7.75732H10.1991C10.0802 7.75732 9.98389 7.66014 9.98389 7.54029ZM10.1991 9.4862C10.0802 9.4862 9.98389 9.38906 9.98389 9.26917C9.98389 9.14928 10.0802 9.05214 10.1991 9.05214H17.0556C17.1745 9.05214 17.2709 9.14928 17.2709 9.26917C17.2709 9.38906 17.1745 9.4862 17.0556 9.4862H10.1991ZM9.27159 10.9981C9.27159 11.118 9.17526 11.2151 9.05637 11.2151H2.19985C2.08096 11.2151 1.98463 11.118 1.98463 10.9981C1.98463 10.8782 2.08096 10.7811 2.19985 10.7811H9.05637C9.17526 10.7811 9.27159 10.8782 9.27159 10.9981ZM9.27159 12.7257C9.27159 12.8456 9.17526 12.9427 9.05637 12.9427H2.19985C2.08096 12.9427 1.98463 12.8456 1.98463 12.7257C1.98463 12.6058 2.08096 12.5086 2.19985 12.5086H9.05637C9.17526 12.5086 9.27159 12.6058 9.27159 12.7257ZM9.27159 14.4532C9.27159 14.5731 9.17526 14.6702 9.05637 14.6702H2.19985C2.08096 14.6702 1.98463 14.5731 1.98463 14.4532C1.98463 14.3333 2.08096 14.2362 2.19985 14.2362H9.05637C9.17526 14.2362 9.27159 14.3334 9.27159 14.4532ZM17.3525 10.9981C17.3525 11.118 17.2562 11.2151 17.1373 11.2151H10.2808C10.1619 11.2151 10.0655 11.118 10.0655 10.9981C10.0655 10.8782 10.1619 10.7811 10.2808 10.7811H17.1373C17.2561 10.7811 17.3525 10.8782 17.3525 10.9981ZM17.3525 12.7257C17.3525 12.8456 17.2562 12.9427 17.1373 12.9427H10.2808C10.1619 12.9427 10.0655 12.8456 10.0655 12.7257C10.0655 12.6058 10.1619 12.5086 10.2808 12.5086H17.1373C17.2561 12.5086 17.3525 12.6058 17.3525 12.7257ZM17.3525 14.4532C17.3525 14.5731 17.2562 14.6702 17.1373 14.6702H10.2808C10.1619 14.6702 10.0655 14.5731 10.0655 14.4532C10.0655 14.3333 10.1619 14.2362 10.2808 14.2362H17.1373C17.2561 14.2362 17.3525 14.3334 17.3525 14.4532Z" fill="#333333" />
                          </svg>
                          <span>Статьи</span>
                          <span>{expert.pro_articles ? expert.pro_articles : 'нет'}</span>
                        </div>
                        <Raiting points={expert.pro_raiting ? expert.pro_raiting : 0} />
                      </div>
                    </div>
                  </li>
                )
              )
            }
          </ul>
        </main>
        <Aside />
      </div>
    </section>
  )
}

export default Experts;
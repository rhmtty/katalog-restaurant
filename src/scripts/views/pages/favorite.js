/* eslint-disable no-new */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import '../templates/components/resto-list-component';
import FavoriteRestoSearchPresenter from './liked-restaurant/favorite-resto-search-presenter';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-resto-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-resto-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });

    // const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    // const restoContainer = document.querySelector('#maincontent');
    // const restoList = document.createElement('resto-list');
    // const titleElement = document.querySelector('#contentTitle');

    // if (restaurants.length !== 0) {
    //   titleElement.innerText = `Daftar Restoran favorit`;
    //   restoContainer.appendChild(titleElement);
    // }

    // restoList.restaurants = restaurants;
    // restoContainer.appendChild(restoList);
  },
};

export default Favorite;

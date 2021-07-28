import { createRestoItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
          
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found">Tidak ada restaurants untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;

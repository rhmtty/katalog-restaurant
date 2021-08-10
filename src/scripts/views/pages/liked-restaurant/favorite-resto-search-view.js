import { createRestoItemTemplate } from '../../templates/template-creator';
import '../../templates/components/resto-list-component'

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <hero-section></hero-section>
      <input id="query" type="text">
      <section class="main-content" id="maincontent">
      </section>
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
    if (restaurants.length) {
      const restoContainer = document.querySelector('#maincontent');
      const restoList = document.createElement('resto-list');
      
      restoList.restaurants = restaurants;
      restoContainer.appendChild(restoList);
      
      // html = restaurants.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      let html;
      html = this._getEmptyRestaurantTemplate();
      document.querySelector('#maincontent').innerHTML = html;
    }
    

    document.querySelector('#maincontent').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<h2 tabindex="0" class="resto-item__not__found content-title">Oops, tidak ada restoran favorit</h2>';
  }
}

export default FavoriteRestaurantSearchView;

{/* <div class="content">
  <input id="query" type="text">
  <h2 class="content__heading">Your Liked Movie</h2>
    <div id="restaurants" class="restaurants">
              
    </div>
</div> */}

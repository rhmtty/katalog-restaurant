/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div id="resto-search-container">
        <input type="text" id="query">
        <div class="resto-result-container">
          <ul class="restaurants"></ul>
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
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="resto__title">${restaurant.title || '-'}</span></li>`),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('resto-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
  }
}

export default FavoriteRestaurantSearchView;

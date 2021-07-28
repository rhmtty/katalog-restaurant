/* eslint-disable class-methods-use-this */
class FavoriteRestoSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery;
    this._favoriteRestaurants.searchRestaurants(this._latestQuery);
  }

  get latestQuery() {
    return this._latestQuery;
  }

  _showFoundRestaurants(restaurants) {
    console.log(restaurants);
    const html = restaurants.reduce(
      (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="resto__title">${restaurant.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('resto-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
  }
}

export default FavoriteRestoSearchPresenter;

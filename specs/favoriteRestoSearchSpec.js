/* eslint-disable class-methods-use-this */
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-resto-search-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-resto-search-view';

describe('Searching Resto', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestoIdb);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('restaurant a');

      expect(presenter.latestQuery).toEqual('restaurant a');
    });

    it('should ask the model to search for liked resto', () => {
      searchRestaurants('restaurant a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('restaurant a');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, title: 'restaurant abc' },
        { id: 222, title: 'ad juga restaurant abcde' },
        { id: 333, title: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.resto__title');
        expect(restaurantTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restaurantTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 111, title: 'restaurant abc' },
        { id: 222, title: 'ada juga restaurant abcde' },
        { id: 333, title: 'ini juga boleh restaurant a' },
      ]);

      searchRestaurants('restaurant a');
    });

    it('should show - when the restaurant returned does not contain title', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantTitles = document.querySelectorAll('.resto__title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('restaurant a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the quuery as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('  ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.resto-item').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

      searchRestaurants('restaurant a');
    });
  });
});

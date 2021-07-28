import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-resto-search-presenter';

describe('Searching Resto', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="resto">
                </ul>
            </div>
        </div>
    `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestoIdb, 'searchRestaurants');
    presenter = new FavoriteRestoSearchPresenter({
      favoriteRestaurants: FavoriteRestoIdb,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestaurants('restaurant a');

    expect(presenter.latestQuery).toEqual('restaurant a');
  });

  it('should ask the model to search for liked resto', () => {
    searchRestaurants('restaurant a');

    expect(FavoriteRestoIdb.searchRestaurants).toHaveBeenCalledWith('restaurant a');
  });

  it('should show the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(1);

    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
    expect(document.querySelectorAll('.restaurant').length).toEqual(2);
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

    presenter._showFoundRestaurants([
      { id: 1, title: 'Satu' },
      { id: 2, title: 'Dua' },
    ]);

    const restaurantTitle = document.querySelectorAll('.resto__title');
    expect(restaurantTitle.item(0).textContent).toEqual('Satu');
    expect(restaurantTitle.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found restaurant without title', () => {
    presenter._showFoundRestaurants([{ id: 1 }]);

    expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
  });

  it('should show the restaurants found by Favorite Restaurants', (done) => {
    document.getElementById('resto-search-container')
      .addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(3);
        done();
      });

    FavoriteRestoIdb.searchRestaurants.withArgs('restaurant a').and.returnValues([
      { id: 111, title: 'restaurant abc' },
      { id: 222, title: 'ad juga restaurant abcde' },
      { id: 333, title: 'ini juga boleh restaurant a' },
    ]);

    searchRestaurants('restaurant a');
  });

  it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
    document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
      const restaurantTitles = document.querySelectorAll('.resto__title');
      expect(restaurantTitles.item(0).textContent).toEqual('restaurant abc');
      expect(restaurantTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
      expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');

      done();
    });

    FavoriteRestoIdb.searchRestaurants.withArgs('restaurant a').and.returnValues([
      { id: 111, title: 'restaurant abc' },
      { id: 222, title: 'ada juga restaurant abcde' },
      { id: 333, title: 'ini juga boleh restaurant a' },
    ]);

    searchRestaurants('restaurant a');
  });
});

import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteRestaurant(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});

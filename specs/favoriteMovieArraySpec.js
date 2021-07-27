/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

/* eslint-disable eqeqeq */
let favoriteRestaurants = [];

const FavoriteRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurants(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});

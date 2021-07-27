/* eslint-disable import/prefer-default-export */
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };

/* eslint-disable array-callback-return */
import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import '../templates/components/detailresto-component';
import '../templates/components/review-component';
import '../../../styles/detail.scss';
import '../../../styles/detail-responsive.scss';
import { createNotifTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
      <div class="notif">
        <p class="notif-text"></p>
      </div>
      <section class="main-content" id="maincontent"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#maincontent');
    const restoDetail = document.createElement('resto-detail');

    restoDetail.detailRestaurant = restaurant.restaurant;
    restoContainer.appendChild(restoDetail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant,
    });

    // kode untuk menampilkan review pada halaman detail
    const reviews = restaurant.restaurant.customerReviews;
    const reviewContainer = document.querySelector('#all-reviews');
    reviews.map((review) => {
      const reviewItem = document.createElement('review-section');
      reviewItem.reviews = review;
      reviewContainer.appendChild(reviewItem);
    });

    // blok kode untuk menambah review
    const inputName = document.querySelector('#input-name');
    const inputReview = document.querySelector('#input-review');
    const buttonSubmit = document.querySelector('#formBtn');
    const notif = document.querySelector('.notif');
    const notifText = document.querySelector('.notif-text');
    buttonSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      const review = {
        message: 'Review sukses di tambahkan!',
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };
      await RestaurantApiSource.postReview(review);

      notifText.innerHTML += createNotifTemplate(review.message);
      notif.classList.add('show-notif');

      setTimeout(() => {
        notif.classList.remove('show-notif');
      }, 5000);
    });
  },
};

export default Detail;

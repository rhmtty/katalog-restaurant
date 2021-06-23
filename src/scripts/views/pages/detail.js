/* eslint-disable array-callback-return */
import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import '../templates/components/detailresto-component';
import '../templates/components/review-component';

const Detail = {
  async render() {
    return `
      <section class="main-content" id="maincontent"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApiSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#maincontent');
    const restoDetail = document.createElement('resto-detail');
    restoDetail.detailRestaurant = resto;
    restoContainer.appendChild(restoDetail);

    // kode untuk menampilkan review pada halaman detail
    const reviews = resto.restaurant.customerReviews;
    const reviewContainer = document.querySelector('#reviewContainer');
    reviews.map((review) => {
      const reviewItem = document.createElement('review-section');
      reviewItem.reviews = review;
      reviewContainer.appendChild(reviewItem);
    });
  },
};

export default Detail;

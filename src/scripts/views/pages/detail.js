import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import '../templates/components/detailresto-component';

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
    const detailResto = document.createElement('resto-detail');
    detailResto.detailRestaurant = resto;
    restoContainer.appendChild(detailResto);
  },
};

export default Detail;

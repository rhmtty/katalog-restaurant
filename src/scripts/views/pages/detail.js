import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="detailResto" class="detail-resto"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantApiSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#detailResto');
    restoContainer.innerHTML += createRestoDetailTemplate(resto);
  },
};

export default Detail;

import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
      <h2 class="content-title" id="content">Daftar Restoran</h2>
      <div class="resto-list" id="restoList"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restoContainer = document.querySelector('#restoList');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;

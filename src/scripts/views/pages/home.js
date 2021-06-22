import RestaurantApiSource from '../../data/restaurant-api-source';
import '../templates/components/resto-list-component';
import '../templates/components/hero-section-component';

const Resto = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="main-content" id="maincontent">
        <h2 class="content-title" id="contentTitle">Daftar Restoran</h2>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restoContainer = document.querySelector('#maincontent');
    const restoList = document.createElement('resto-list');
    restoList.restaurants = restaurants;
    restoContainer.appendChild(restoList);
  },
};

export default Resto;

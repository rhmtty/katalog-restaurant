import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import '../templates/components/resto-list-component';

const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="main-content" id="maincontent">
        <h2 tabindex="0" class="content-title" id="contentTitle">Oops, tidak ada restoran favorit</h2>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#maincontent');
    const restoList = document.createElement('resto-list');
    const titleElement = document.querySelector('#contentTitle');

    if (restaurants.length !== 0) {
      titleElement.innerText = `Daftar Restoran favorit`;
      restoContainer.appendChild(titleElement);
    }

    restoList.restaurants = restaurants;
    restoContainer.appendChild(restoList);
  },
};

export default Favorite;

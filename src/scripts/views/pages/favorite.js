const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="main-content" id="maincontent">
        <h2 class="content-title" id="contentTitle">Daftar Restoran Favorit Anda</h2>
      </section>
    `;
  },

  async afterRender() {
    // const restaurants = await RestaurantApiSource.listRestaurants();
    const restoContainer = document.querySelector('#maincontent');
    const restoList = document.createElement('resto-list');
    // restoList.restaurants = restaurants;
    restoContainer.appendChild(restoList);
  },
};

export default Favorite;

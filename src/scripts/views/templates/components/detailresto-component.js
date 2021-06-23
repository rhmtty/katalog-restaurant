/* eslint-disable indent */
import CONFIG from '../../../globals/config';

class DetailRestoComponent extends HTMLElement {
  set detailRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { pictureId, rating, name, address, description } = this._restaurant.restaurant;

    this.innerHTML = `
      <section>
        <div class="detail_image">
          <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="">
          <div class="tag">
            <strong class="rating">${rating}</strong>
            <h2>${name}</h2>
          </div>
        </div>
        <article class="detail_article">
          <div class="categories">
            <span class="category_name">Italia</span>
            <span class="category_name">Modern</span>
          </div>
          <h3 class="address" style="color: #5165f4;">
              <i class="fad fa-map-marker-alt"></i>
              ${address}
          </h3>
          <p class="description">${description}</p>
        </article>
        <div id="reviewContainer" class="customer_reviews-wrapper">
          <h2>Reviews</h2>

        </div>
      </section>`;
  }
}

customElements.define('resto-detail', DetailRestoComponent);

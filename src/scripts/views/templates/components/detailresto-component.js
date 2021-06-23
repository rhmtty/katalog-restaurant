/* eslint-disable indent */
import CONFIG from '../../../globals/config';

class DetailRestoComponent extends HTMLElement {
  set detailRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { pictureId, rating, name, address, description, categories, menus, customerReviews } = this._restaurant;
    this.innerHTML = `
      <section class="detail__section">
        <div class="detail__image">
          <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="">
          <strong class="rating">
            <i class="fas fa-star"></i>
            ${rating}
          </strong>
          <div class="name__wrapper">
            <h2>${name}</h2>
          </div>
        </div>
        <article class="detail__article">
          <div class="categories">
          ${categories.map((category) => `
            <span id="category" class="category__name">${category.name}</span>
          `).join('')}
          </div>
          <h3 class="address" style="color: #5165f4;">
              <i class="fad fa-map-marker-alt"></i>
              ${address}
          </h3>
          <p class="description">${description}</p>
          <div class="menus">
            <ul class="foods">
              <strong>Foods</strong>
              ${menus.foods.map((food) => `
                <li>${food.name}</li>
              `).join('')}
            </ul>

            <ul class="drinks">
              <strong>Drinks</strong>
              ${menus.drinks.map((drink) => `
                <li>${drink.name}</li>
              `).join('')}
            </ul>
          </div>
        </article>
      </section>
      <section id="reviewContainer" class="customer__reviews-section">
        <h2>${customerReviews.length} Reviews</h2>

      </section>`;
  }
}

customElements.define('resto-detail', DetailRestoComponent);

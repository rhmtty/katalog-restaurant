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
          <img src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
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
      <section class="customer__reviews-section">
        <h2>${customerReviews.length} Reviews</h2>
        <div id="all-reviews">

        </div>
        <form action="/" method="POST" id="review-form">
          <div class="form__input">
            <h2>Add New Review</h2>
            <label for="name">Name</label>
            <input type="text" id="name-input" name="name" placeholder="Type Your name.." required>
            <label for="review">Review</label>
            <textarea type="text" id="review-input" name="review" placeholder="Type Your review.." required></textarea>
          </div>
          <button id="formBtn">SUBMIT</button>
        </form>
      </section>`;
  }
}

customElements.define('resto-detail', DetailRestoComponent);

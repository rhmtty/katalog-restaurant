/* eslint-disable indent */
import CONFIG from '../../../globals/config';

class DetailRestoComponent extends HTMLElement {
  set detailRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  _customerReviewsTemplate(review) {
    const { name, date, review: customerReview } = review;
    return `
      <div class="review__box">
        <span style="color: #064420; font-size: 3em">
          <i class="fas fa-user-tie"></i>
        </span>
        <div class="detail__review">
          <p class="name">${name}</p>
          <span class="date">${date}</span>
          <p class="comment">${customerReview}</p>
        </div>
      </div>
    `;
  }

  render() {
    const { pictureId, rating, name, address, description } = this._restaurant.restaurant;
    const reviews = this._restaurant.restaurant.customerReviews;
    console.log(reviews);

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
        <div class="customer_reviews-wrapper">
          <h2>Reviews</h2>
          ${reviews.forEach((review) => {
            this.innerHTML = this._customerReviewsTemplate(review);
            console.log(this._customerReviewsTemplate(review));
          })}
        </div>
      </section>`;
  }
}

customElements.define('resto-detail', DetailRestoComponent);

import { createCostumerReviewsTemplate } from '../template-creator';

class ReviewsComponent extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = createCostumerReviewsTemplate(this._reviews);
  }
}

customElements.define('review-section', ReviewsComponent);

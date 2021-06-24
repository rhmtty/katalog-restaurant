class ReviewsComponent extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    const { name, date, review } = this._reviews;
    this.innerHTML = `
      <div class="review__box">
        <span style="font-size: 3em">
          <i class="fas fa-user-tie"></i>
        </span>
        <div class="detail__review">
          <p class="name__text">${name}</p>
          <span class="date__text">${date}</span>
          <p class="review__text">${review}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('review-section', ReviewsComponent);

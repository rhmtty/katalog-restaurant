import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurantItem) => {
  const { id, pictureId, name, city, rating, description } = restaurantItem;

  return `
    <a tabindex="0" href="/#/detail/${id}"><img class="img-thumbnail" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}"></a>
    <p tabindex="0" class="city">
      ${city}
    </p>
    <span tabindex="0" class="rating">
      <i class="fas fa-star"></i>
      ${rating}
    </span>
    <div class="content">
      <h1 tabindex="0" class="title"><strong><a href="/#/detail/${id}">${name}</a></strong></h1>
      <p tabindex="0" class="description">${description}</p>
    </div>
  `;
};

const createRestoDetailTemplate = (restaurantDetail) => {
  const { pictureId, rating, name, address, description, categories, menus, customerReviews } = restaurantDetail;

  return `
  <section class="detail__section">
      <div class="detail__image">
        <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
        <strong tabindex="0" class="rating">
          <i class="fas fa-star"></i>
          ${rating}
        </strong>
        <div class="name__wrapper">
          <h2 tabindex="0">${name}</h2>
        </div>
      </div>
      <article class="detail__article">
        <div class="categories">
        ${categories.map((category) => `
          <span tabindex="0" id="category" class="category__name">${category.name}</span>
        `).join('')}
        </div>
        <h3 tabindex="0" class="address" style="color: #5165f4;">
            <i class="fad fa-map-marker-alt"></i>
            ${address}
        </h3>
        <p tabindex="0" class="description">${description}</p>
        <div class="menus">
          <ul class="foods">
            <strong tabindex="0">Foods</strong>
            ${menus.foods.map((food) => `
              <li tabindex="0">${food.name}</li>
            `).join('')}
          </ul>

          <ul class="drinks">
            <strong tabindex="0">Drinks</strong>
            ${menus.drinks.map((drink) => `
              <li tabindex="0">${drink.name}</li>
            `).join('')}
          </ul>
        </div>
      </article>
    </section>
    <section class="customer__reviews-section">
      <h2 tabindex="0">${customerReviews.length} Reviews</h2>
      <div id="all-reviews">

      </div>
      <form action id="review-form">
        <div class="form__input">
          <h2 tabindex="0">Add New Review</h2>
          <label for="name">Name</label>
          <input tabindex="0" type="text" id="input-name" name="name" placeholder="Type Your name.." required>
          <label for="review">Review</label>
          <textarea tabindex="0" type="text" id="input-review" name="review" placeholder="Type Your review.." required></textarea>
        </div>
        <button tabindex="0" id="formBtn">SUBMIT</button>
      </form>
  </section>`;
};

const createCostumerReviewsTemplate = (reviews) => {
  const { name, date, review } = reviews;

  return `
    <div class="review__box">
      <span style="font-size: 3em">
        <i class="fas fa-user-tie"></i>
      </span>
      <div class="detail__review">
        <p tabindex="0" class="name__text">${name}</p>
        <span tabindex="0" class="date__text">${date}</span>
        <p tabindex="0" class="review__text">${review}</p>
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button id="likeButton" aria-label="like this resto" class="btn-favorite">
      <i class="fal fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" id="likeButton" aria-label="unlike this resto" class="btn-favorite">
      <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = () => `
  <div class="loading-indicator">
      <img src="./loading-indicator/loading_3.gif" alt="">
  </div>
`;

const createNotifTemplate = (message) => `
  <p>${message}</p>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate, createLoadingTemplate, createRestoDetailTemplate, createRestoItemTemplate, createCostumerReviewsTemplate, createNotifTemplate };

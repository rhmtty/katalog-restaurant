import CONFIG from '../../../globals/config';

class RestoItemComponent extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const { id, pictureId, name, city, rating, description } = this._resto;
    this.innerHTML = `
      <a href="/#/detail/${id}"><img class="img-thumbnail" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}"></a>
      <p class="city">
        ${city}
      </p>
      <span class="rating">
        <i class="fas fa-star"></i>
        ${rating}
      </span>
      <div class="content">
        <h1 class="title"><strong><a href="/#/detail/${id}">${name}</a></strong></h1>
        <p class="description">${description}</p>
      </div>
    `;
  }
}

customElements.define('resto-item', RestoItemComponent);

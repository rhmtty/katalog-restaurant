import './resto-item-component';

class RestaurantListComponent extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((resto) => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.resto = resto;
      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestaurantListComponent);

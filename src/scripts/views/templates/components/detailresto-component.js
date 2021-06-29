import { createRestoDetailTemplate } from '../template-creator';
class DetailRestoComponent extends HTMLElement {
  set detailRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = createRestoDetailTemplate(this._restaurant);

    this.querySelector('#formBtn').addEventListener('click', this._clickEvent);
  }
}

customElements.define('resto-detail', DetailRestoComponent);

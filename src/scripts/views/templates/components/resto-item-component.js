import { createRestoItemTemplate } from '../template-creator';
class RestoItemComponent extends HTMLElement {
  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    this.innerHTML = createRestoItemTemplate(this._resto);
  }
}

customElements.define('resto-item', RestoItemComponent);

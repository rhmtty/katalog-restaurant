class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img src="./images/hero-image_2-large.jpg" alt="hero image" class="hero-img"></img>
      </picture>
      <div class="hero-description">
        <h1 tabindex="0" class="hero-title">Kami memudahkan Anda untuk mencari restoran terbaik.</h1>
        <h2 tabindex="0" class="hero-subtitle">Tidak perlu keluar rumah cukup gunakan gagdet Anda dimanapun dan kapanpun</h2>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroComponent);

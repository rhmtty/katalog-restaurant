class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="./images/heros/hero-image_2.jpg" alt="hero image" class="hero-img">
      <div class="hero-description">
        <h1 class="hero-title">Kami memudahkan Anda untuk mencari restoran terbaik.</h1>
        <h2 class="hero-subtitle">Tidak perlu keluar rumah cukup gunakan gagdet Anda dimanapun dan kapanpun</h2>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroComponent);

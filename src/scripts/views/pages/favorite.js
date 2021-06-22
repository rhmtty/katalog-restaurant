const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="main-content" id="maincontent">
        <h2 class="content-title" id="contentTitle">Daftar Restoran Favorit Anda</h2>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

const Favorite = {
  async render() {
    return `
        <h2 class="content-title" id="content">Your Favorite Resto</h2>
        <div class="resto-lists"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

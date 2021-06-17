const Resto = {
  async render() {
    return `
        <h2 class="content-title" id="content">Daftar Restoran</h2>
        <div class="resto-lists"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan di panggil setelah render()
  },
};

export default Resto;

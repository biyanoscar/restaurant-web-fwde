const Favorite = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latest__label">Favorite Restaurants</h1>
        <div id="restaurants" class="restaurants">
            

            

        </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;

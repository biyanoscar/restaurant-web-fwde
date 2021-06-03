import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="latest">
        <h1 class="latest__label">Explore Restaurants</h1>
        <div id="restaurants" class="restaurants">
            

            

        </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const { restaurants } = await RestaurantDicodingSource.list();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Home;

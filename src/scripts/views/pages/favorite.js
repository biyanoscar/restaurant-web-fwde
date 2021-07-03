import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML += '<div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>';
    }
  },
};

export default Favorite;

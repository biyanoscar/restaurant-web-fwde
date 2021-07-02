import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantsContainer = document.querySelector('#restaurant');
    const { restaurant } = await RestaurantDicodingSource.detailRestaurant(url.id)
      .catch((error) => {
        // console.log(`<h1>${error.message}</h1>`); // 'An error has occurred: 404'
        restaurantsContainer.innerHTML = `<h1>${error.message}</h1>`;
      });

    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;

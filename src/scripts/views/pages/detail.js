import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    const { restaurant } = await RestaurantDicodingSource.detailRestaurant(url.id);
    // console.log(restaurant);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
    LikeButtonInitiator.init({
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

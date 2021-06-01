import data from '../../../DATA.json';

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
    const { restaurants } = data;
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += this.createRestaurantItemTemplate(restaurant);
    });
  },

  createRestaurantItemTemplate(restaurant) {
    return `<article class="restaurant-item" tabindex="0">
            <div class="list-card-image">
                <div class="rating position-absolute">
                    <span class="badge badge-rating">Rating: ${restaurant.rating} </span>
                </div>
                <div class="member-plan position-absolute">
                    <span class="badge badge-city">${restaurant.city}</span>
                </div>
                <img class="restaurant-item__thumbnail"
                    src="${restaurant.pictureId}"
                    alt="${restaurant.name}">
            </div>
            <div class="restaurant-item__content">
                <h1 class="restaurant-item__title">${restaurant.name}</h1>
                <p class="restaurant-item__description text">${restaurant.description}</p>
    
            </div>
        </article>`;
  },
};

export default Home;

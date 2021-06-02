import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__drinks">
    <h3>Minuman</h3>
    <div class="drinks_grid">
    ${restaurant.menus.drinks
    .map(
      (drink) => `
            <div>&#10004; ${drink.name}</div>
          `,
    )
    .join('')}
    </div>
  </div>

  <div class="restaurant__foods">
    <h3>Makanan</h3>
    <div class="foods_grid">
    ${restaurant.menus.foods
    .map(
      (food) => `
          <div>&#10004; ${food.name}</div>
        `,
    )
    .join('')}
      
    </div>
  </div>


  <div class="restaurant__reviews">
    <h3>Reviews</h3>
    <div class="reviews_grid">
      ${restaurant.customerReviews
        .map(
          (review) => `
          <div class="review-member">
            <h4 class="text-title">${review.name}</h4>
            <div class="review-date">${review.date}</div>
            <div>${review.review}</div>
          </div>
            `,
        )
        .join('')}
      
    </div>
  </div>

  
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item" tabindex="0">
<div class="list-card-image">
    <div class="rating position-absolute">
        <span class="badge badge-rating">⭐️ ${restaurant.rating} </span>
    </div>
    <div class="member-plan position-absolute">
        <span class="badge badge-city">${restaurant.city}</span>
    </div>
    <img class="restaurant-item__thumbnail"
        src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
        alt="${restaurant.name}">
</div>
<div class="restaurant-item__content">
    <h1 class="restaurant-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
    <p class="restaurant-item__description text">${restaurant.description}</p>

</div>
</article>`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');
  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__title a');
  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  const btnLabel = await I.grabAttributeFrom('#likeButton', 'aria-label');
  assert.strictEqual(btnLabel, 'unlike this restaurant'); // check whether button unlike
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

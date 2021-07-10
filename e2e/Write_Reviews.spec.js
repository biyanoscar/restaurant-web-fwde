const assert = require('assert');

Feature('Write Reviews');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Write one Reviews', async ({ I }) => {
  I.seeElement('.restaurant-item__title a');
  const firstRestaurant = locate('.restaurant-item__title a').first();
  const href = await I.grabAttributeFrom(firstRestaurant, 'href');
  console.log(href);

  I.click(firstRestaurant);

  I.fillField('name', 'dicoding');
  I.fillField('review', 'Testing e2e');

  I.click('Submit Review');
});

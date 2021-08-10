const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#query");
  I.see("Oops, tidak ada restoran favorit", ".resto-item__not__found");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Oops, tidak ada restoran favorit", ".resto-item__not__found");

  I.amOnPage("/");

  I.seeElement("strong a");

  const firstRestaurant = locate("strong a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement("resto-item");
  const likedRestaurant = await I.grabTextFrom(".title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
});

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

Scenario("searching restaurants", async ({ I }) => {
  I.see("Oops, tidak ada restoran favorit", ".resto-item__not__found");

  I.amOnPage("/");

  I.seeElement("strong a");

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate("strong a").at(i));
    I.seeElement("#likeButton");
    I.click("#likeButton");
    titles.push(await I.grabTextFrom(".title"));
    I.amOnPage("/");
  }

  I.amOnPage("/#/favorite");
  I.seeElement("#query");

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter(
    (title) => title.indexOf(searchQuery) !== -1
  );

  I.fillField("#query", searchQuery);
  I.pressKey("Enter");

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements(
    "resto-item"
  );
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(
      locate("resto-item").at(index + 1)
    );
    assert.strictEqual(title, visibleTitle);
  });
});

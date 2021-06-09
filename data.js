(function () {
  const shoppingData = [];

  for (let i = 0; i < 20; i++) {
    shoppingData.push({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      imageUrl: faker.random.image(),
    });
  }

  window.getShoppingData = function () {
    return new Promise((res) => {
      setTimeout(() => res(shoppingData), 1500);
    });
  };
})();

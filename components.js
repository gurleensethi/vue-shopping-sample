(function () {
  const { app } = window;

  app.component("app-bar", {
    props: ["totalPrice", "totalItems"],
    template: `
      <div class="app-bar">
        <div class="app-bar__title">Vue Shopping Cart</div>
        <div class="app-bar__price">&dollar;{{ totalPrice }}</div>
        <div class="app-bar__bag">{{ totalItems }}</div>
      </div>
    `,
  });

  app.component("product-list", {
    template: `
      <div class="product-list">        
        <slot></slot> 
      </div>
    `,
  });

  app.component("product-item", {
    props: ["name", "price", "image", "itemCount"],
    emits: ["addItem", "removeItem"],
    methods: {
      addItem() {
        this.$emit("addItem");
      },
      removeItem() {
        this.$emit("removeItem");
      },
    },
    template: `
      <div class="product-item">
        <img class="product-item__image" :src="image"/>
        <p class="product-item__name">{{ name }}</p>
        <p class="product-item__price">&dollar;{{ price }}</p>
        <div class="product-item__controls">
          <button class="product-item__control" @click="addItem">+</button>
          <div class="product-item__count">{{ itemCount || 0 }}</div>
          <button class="product-item__control" @click="removeItem">-</button>
        </div>
      </div>
    `,
  });
})();

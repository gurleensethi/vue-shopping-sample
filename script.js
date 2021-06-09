(function () {
  window.app = Vue.createApp({
    data() {
      return {
        isLoading: false,
        items: [],
        cart: {},
      };
    },
    computed: {
      totalPrice() {
        return Object.keys(this.cart)
          .map((key) => {
            return this.cart[key].count * this.cart[key].item.price;
          })
          .reduce((prev, curr) => {
            return prev + curr;
          }, 0);
      },
      totalItems() {
        return Object.keys(this.cart)
          .map((key) => {
            return this.cart[key].count;
          })
          .reduce((prev, curr) => {
            return prev + curr;
          }, 0);
      },
    },
    created() {
      this.isLoading = true;
      window.getShoppingData().then((data) => {
        this.items = data;
        this.isLoading = false;
      });
    },
    methods: {
      addItem(index) {
        if (!this.cart[index]) {
          this.cart[index] = {
            count: 0,
            item: this.items[index],
          };
        }

        this.cart[index].count++;
      },
      removeItem(index) {
        if (this.cart[index]) {
          this.cart[index].count--;

          if (this.cart[index].count === 0) {
            delete this.cart[index];
          }
        }
      },
      getItemCount(index) {
        if (this.cart[index]) {
          return this.cart[index].count;
        }

        return 0;
      },
    },
  });

  window.mountApp = function () {
    window.app.mount("#root");
  };
})();

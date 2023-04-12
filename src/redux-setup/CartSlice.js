import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log("payloaddddd", action.payload);
      const product = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === product.id
      );

      if (existingProductIndex >= 0) {
        // The product is already in the cart, so increase the quantity
        state.products[existingProductIndex].quantity++;
      } else {
        // The product is not in the cart, so add it with a quantity of 1
        state.products.push({ ...product, quantity: 1 });
      }

      AsyncStorage.setItem("cart", JSON.stringify(state.products));
    },

    // Ở đoạn code trên, chúng ta đã thêm một action mới có tên là updateQuantity,
    // nó có hai tham số là id và quantity. Bên trong action, chúng ta sử dụng findIndex()
    // để tìm sản phẩm với id được cung cấp trong giỏ hàng. Nếu sản phẩm được tìm thấy,
    // chúng ta cập nhật quantity cho sản phẩm đó.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === id);

      if (productIndex >= 0) {
        // Update the quantity of the product
        state.products[productIndex].quantity = quantity;

        // Update the price of the product based on the new quantity
        const newPrice = state.products[productIndex].price * quantity;
        state.products[productIndex].price = newPrice;
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === productId);

      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

// AsyncStorage.getItem("cart").then((cart) => {
//   console.log("cart from AsyncStorage:", cart);
// });

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

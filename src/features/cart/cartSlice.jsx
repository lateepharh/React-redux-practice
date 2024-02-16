import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartItems from "../../Component/cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  // cartItems: CartItems,
  cartItems: [],
  total: 0,
  amount: 9,
  isLoading: true,
};

//the createasyncthunk is looking for two things : the taction ype and and a callback function

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //n.b whatever we are returning will become the new state value
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      //setting new value for the state item
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      console.log(action);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  //with extra reducersweare getting a lifecycle actions
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      console.log(action);
      (state.isLoading = false), (state.cartItems = action.payload);
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;

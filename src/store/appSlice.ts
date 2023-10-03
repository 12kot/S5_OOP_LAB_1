import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TItem = {
  id: number;
};

type TState = {
  customers: TItem[];
  orders: TItem[];
  done: TItem[];
};

const initialState: TState = {
  customers: [],
  orders: [],
  done: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addCustomers(state, action: PayloadAction<{ id: number }>) {
      state.customers = [...state.customers, action.payload];
    },
    removeCustomers(state, action: PayloadAction<{ count: number }>) {
      state.customers = [
        ...state.customers.slice(action.payload.count, state.customers.length),
      ];
    },

    addOrders(state, action: PayloadAction<{count: number}>) {
      console.log(action.payload);
      state.orders = [...state.orders, ...state.customers.slice(0, action.payload.count)];
    },
    removeOrders(state, action: PayloadAction<{ count: number }>) {
      state.orders = [
        ...state.orders.slice(action.payload.count, state.orders.length),
      ];
    },

    addDone(state, action: PayloadAction<{count: number}>) {
      state.done = [...state.done, ...state.orders.slice(0, action.payload.count)];
    },
  },
  extraReducers: (builder) => {},
});

export default appSlice;
export const {
  addCustomers,
  removeCustomers,
  addOrders,
  removeOrders,
  addDone,
} = appSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  clientSecret: string | null;
  isPaymentReady: boolean;
}

const initialState: PaymentState = {
  clientSecret: null,
  isPaymentReady: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setClientSecret: (state, action: PayloadAction<string>) => {
      state.clientSecret = action.payload;
      state.isPaymentReady = !!action.payload;
    },
    clearPaymentIntent: (state) => {
      state.clientSecret = null;
      state.isPaymentReady = false;
    },
  },
});

export const { setClientSecret, clearPaymentIntent } = paymentSlice.actions;
export default paymentSlice.reducer;

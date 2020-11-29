import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import invoiceReducer from "../features/invoiceSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
  },
});

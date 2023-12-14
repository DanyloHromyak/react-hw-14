import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contact/contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
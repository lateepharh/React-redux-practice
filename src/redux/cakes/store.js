import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeReducer";

export const store = configureStore(cakeReducer)
import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";

export const store = configureStore({ reducer: { timer: timerReducer } })
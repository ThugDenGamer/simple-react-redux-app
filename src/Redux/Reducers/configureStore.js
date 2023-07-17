// export store function that return config the store's reducer

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";

const store = function () {
  return configureStore({
    reducer: { counterReducer }
  })
}

export default store
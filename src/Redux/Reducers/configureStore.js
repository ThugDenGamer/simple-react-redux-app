// export store function that return config the store's reducer

import { configureStore } from "@reduxjs/toolkit";

import reducers from "./index";

const store = function () {
  return configureStore({
    reducer: reducers
  })
}

export default store
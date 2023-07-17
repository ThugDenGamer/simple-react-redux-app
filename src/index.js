import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./Redux/Reducers/configureStore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store()}>   
      <App />
    </Provider>
  </React.StrictMode>
);

// store() set the reducers under state (state.counterReducer)

reportWebVitals();

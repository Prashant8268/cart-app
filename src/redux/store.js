import reducer from "./reducers.js/reducer";
const redux = require('redux');

const store = redux.createStore(reducer);

export default store;
import { createStore, compose } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
// const persistConfig = {
//   key: 'root',
//   storage: storage
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers()
)


// const pReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(pReducer, composeEnhancers());
// const persistor = persistStore(store);
// export { persistor, store };

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/es/integration/react'
import reducers from './reducers'
import App from './components/App'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistConfig = {
  key:'root' , 
  storage, 

}
const persistedReducer = persistReducer(persistConfig ,reducers   )
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
)
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate 
      loading={null}
      persistor={persistor}>
    <App />
    </PersistGate>

  </Provider>
  ,
  document.querySelector('#root')
)

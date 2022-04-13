import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'


const preloadedState = {
    players: [],
    animationActive: false,
    logs: [],
}

export default function configureStore() {
    const enhancers = []
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const store = createStore(rootReducer, preloadedState, composedEnhancers)
  
    return store;
}
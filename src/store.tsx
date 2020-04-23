import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FishAppReducer from './Reducers/FishAppReducer'

import { RootState } from './types';

let initialState: RootState = {
	apps : {},
	config : {}
}

const loadState = (): RootState => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return initialState;
    }
    return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return initialState;
  }
}

const saveState = (state: RootState) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  } catch (error) {
	// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
  }
}



const rootReducer = (state: RootState = loadState(), action: any): RootState => {
  return {
  	apps : {
  		fishApp : FishAppReducer(state.apps.fishApp, action)
  	},
  	config : {}
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  store.subscribe( function () {
    saveState(store.getState())
  });
  return store;
}
// import { createStore } from 'redux';
// import rootReducer from './reducer';

//  export const store = createStore(rootReducer);

 //export default store;

// HAY DOS FORMAS DE CREAR EL STORE, LA SEGUNDA ES PARA PODER USAR EL REDUX DEVTOOLS EN EL NAVEGADOR


import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;

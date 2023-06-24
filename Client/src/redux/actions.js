import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./types";
import axios from "axios";

export const addFav = (character) => {

    // esta es la version con promesas

    /*const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
    */
// esta es la version async await

try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const { data } = await axios.post(endpoint, character)
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       
    };

} catch (error) {
    return {error: error.message}
}

};

export const removeFav = (id) => {

    // esta es la version con promesas

    // const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    // return (dispatch) => {
    //    axios.delete(endpoint).then(({ data }) => {
    //       return dispatch({
    //          type: REMOVE_FAV,
    //          payload: data,
    //    });
    //    });
    // };

// esta es la version con async 
try {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       const { data } = await axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });
         
      };

} catch (error) {
    return ({error: error.message})
}


};
 
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
};
export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
};
export const reset = () => {
    return {
        type: RESET,
        
    }
};
import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
}

const rootReducer = (state=initialState, action) => {
        switch (action.type) {
            case ADD_FAV:
                return {
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload]
                }
        
            case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter((elemento) => elemento.id !== action.payload)
                }
        
            default:
                return {
                    ...state,
                }
        }
    }



export default rootReducer;
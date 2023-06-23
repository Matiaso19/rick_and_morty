import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state=initialState, action) => {
        switch (action.type) {
            case ADD_FAV:
                return {
            ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload
            }
        
            case REMOVE_FAV:
                return {
                    ...state, 
                    myFavorites: action.payload
                }
            case FILTER:
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter((elemento) => elemento.gender === action.payload)
                }
            case ORDER:
                const filtered = state.allCharacters;
                const order = filtered.sort((a, b) => {
                    if(action.payload === 'A') {
                        return a.id - b.id
                    }
                    else {
                        return b.id - a.id
                    }
                    
                })
                return {
                    ...state, 
                    myFavorites: order
                }
                case RESET:
                    return {
                        ...state,
                        myFavorites: [...state.allCharacters],
                    }
                
            
                default:
                    return {
                        ...state,
                    }
            }
        }
    
    
    
    export default rootReducer;
                    
                

                


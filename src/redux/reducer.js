import { GET_GAMES, POST_VIDEOGAME, GET_GENRES, GET_PLATFORMS, GET_BY_ID,GET_FILTER,GET_BY_NAME } from "./actions.js"

const initialState = {
    videogames: [],
    videogamesCopy: [],
    genres: [],
    gameId: [],
    platforms: [],


}

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_GAMES: return{
            ...state,
            videogames : action.payload,
            videogamesCopy:action.payload}
        
        case POST_VIDEOGAME:return {
                  ...state,
                };
        case GET_GENRES:return {
            ...state,
            genres: action.payload};

        case GET_PLATFORMS:return{
            ...state,platforms:action.payload
        };

        case GET_BY_ID : return{
            ...state,
            gameId: action.payload,
        }

        // case GET_GAMES_BDD : return{
        //     ...state,
        //     videogames: action.payload,
        // }
       
        case GET_FILTER : return{
            ...state,
            videogames: action.payload,
        }
       
        case  GET_BY_NAME : return{
            ...state,
            videogames: action.payload,
        }
       




        default:
            return state
    }
}


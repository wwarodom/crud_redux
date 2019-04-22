import {combineReducers} from 'redux'

const initalState = {
    songs: [],
    message: '',
    name:'Default name',
    price: 120
};

export const songReducer = (state = initalState, action) => {
    switch (action.type) {

        case 'GET_SONGS_SUCCESS':
            console.log('action r: ' , action.songs)
            return  {...state,
                songs: action.songs,
                name: state.name,
                price: state.price,
            }
        case 'GET_SONGS_FAILED':
            console.log('action: Failed')
            return null

        case 'ADD_SONG_SUCCESS':
            return {
                songs:[...state.songs ,{id:state.songs[state.songs.length-1].id+1, ...action.song}],
                name: action.song.name,
                price: action.song.price,
                message: action.message.message
            }
        case 'ADD_SONG_FAILED':
            console.log('action: Failed')
            return null

        case 'HANDLE_CHANGE':
            return {
                ...state,
                [action.target.name]: action.target.value,
            }

        case 'GET_SONG_SUCCESS':
            return {
                ...state,
                name: action.song.name,
                price: action.song.price,
            }
        case 'GET_SONG_FAILED':
            console.log('action: Failed')
            return null

        case 'UPDATE_SONG_SUCCESS':
            let id = state.songs.findIndex( (song) => song.id === +action.id)
            state.songs[id].name = action.name
            state.songs[id].price = action.price
            return {
                ...state,
                name: action.name,
                price: action.price,
                message: action.message.message
            }
        case 'UPDATE_SONG_FAILED':
            console.log('action: Failed')
            return null

        case 'DELETE_SONG_SUCCESS':
            state.songs = state.songs.filter( (song) => song.id !== +action.id )
            return {
                ...state,
                message: action.message.message
            }
        case 'DELETE_SONG_FAILED':
            console.log('action: Failed')
            return null

        default:
            return state
    }
}

const rootReducer = combineReducers( {
    songsData: songReducer
})

export default rootReducer

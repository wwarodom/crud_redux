import axios from "axios";


// ==== HandleChange ====
export const handleChange = (e) => {
    return {
        type: 'HANDLE_CHANGE',
        target: e.target
    }
}


// ==== Read ====
export const getSongs = () => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost/api/songs`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getSongsSuccess(responseBody));
    } catch (error) {
        console.error(error);
        dispatch(getSongsFailed());
    }
}
export const getSongsSuccess = songs => ({ type: 'GET_SONGS_SUCCESS',  songs});
export const getSongsFailed = () => ({ type: 'GET_SONGS_FAILED'});

// ==== Add new ====
export const addSong = (song) => async (dispatch) => {
    try {
        console.log('add new song', song)
        const response = await axios.post(`http://localhost/api/songs`, song)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(addSongSuccess(song, responseBody));
    } catch (error) {
        console.error(error);
        dispatch(addSongFailed());
    }
}
export const addSongSuccess = (song, message) => ({ type: 'ADD_SONG_SUCCESS', song, message  });
export const addSongFailed = () => ({ type: 'ADD_SONG_FAILED'});



// ==== Get song ====
export const getSong = (id) => async (dispatch) => {
    try {
        console.log('Get song id:', id)
        const response = await axios.get(`http://localhost/api/songs/${id}`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(getSongSuccess(id,responseBody));
    } catch (error) {
        console.error(error);
        dispatch(getSongFailed());
    }
}
export const getSongSuccess = (id, song) => ({ type: 'GET_SONG_SUCCESS',id, song  });
export const getSongFailed = () => ({ type: 'GET_SONG_FAILED'});

// ==== Update song ====
export const updateSong = (id,name,price) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost/api/songs/${id}`,{name, price})
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(updateSongSuccess(id,name,price,responseBody));
    } catch (error) {
        console.error(error);
        dispatch(updateSongFailed());
    }
}
export const updateSongSuccess = (id, name, price, message) => ({ type: 'UPDATE_SONG_SUCCESS',id, name,price, message});
export const updateSongFailed = () => ({ type: 'UPDATE_SONG_FAILED'});

// ==== Delete song ====
export const deleteSong = (id) => async (dispatch) => {
    try {
        console.log('Delete song id:', id)
        const response = await axios.delete(`http://localhost/api/songs/${id}`)
        const responseBody = await response.data;
        console.log('response: ', responseBody)
        dispatch(deleteSongSuccess(id,responseBody));
    } catch (error) {
        console.error(error);
        dispatch(deleteSongFailed());
    }
}
export const deleteSongSuccess = (id, message) => ({ type: 'DELETE_SONG_SUCCESS',id, message  });
export const deleteSongFailed = () => ({ type: 'DELETE_SONG_FAILED'});

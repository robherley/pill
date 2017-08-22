import axios from 'axios';

export const fetchPlaylist = (playlistID) => {
  const fetch = axios.create({
    headers: {
      'Accept': 'application/json'
    }
  });
  return (dispatch) => {
    fetch.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistID}&key=AIzaSyCIjjltfnIzw3HYqTeaJXqu_GTZABq0c9s`)
    .then(response =>
      dispatch({
        type: 'UPDATE_PLAYLIST',
        payload: response
      })
    )
    .catch(err => dispatch({ type: 'ERROR_FETCHING', payload: err}))
  }
}

export const changeVolume = (newVolume) => {
  return {
    type: 'UPDATE_VOLUME',
    payload: newVolume
  }
}

export const changeVideoIndex = (newIndex) => {
  return {
    type: 'CHANGE_VIDEO_INDEX',
    payload: newIndex
  }
}

export const pausePlay = () => {
  return {
    type: 'PAUSE_PLAY'
  }
}
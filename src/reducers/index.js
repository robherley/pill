import playlist from './playlist';
import video from './video';

import { combineReducers } from 'redux';

export default combineReducers({
    playlist,
    video
})

/*
    We need to do setup these parts in the state:
    videoList
    currentVideo
    volume

*/
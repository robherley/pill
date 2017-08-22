import playlist from './playlist';
import video from './video';
import volume from './volume';

import { combineReducers } from 'redux';

export default combineReducers({
    playlist,
    video,
    volume
})

/*
    We need to do setup these parts in the state:
    videoList
    currentVideo
    volume

*/
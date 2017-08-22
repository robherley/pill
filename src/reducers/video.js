const initialState = {
  index: 0,
  playing: true,
  info: {
    desc: null,
    title: null,
    views: null,
    uploader: null
  }
}

const video = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO_INDEX':
      return {...state, index: action.payload}
    case 'PAUSE_PLAY':
      return {...state, playing: !state.playing}
    default:
      return state;
  }
};

export default video;
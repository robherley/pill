const playlist = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_PLAYLIST':
      return action.payload.data;
    case 'ERROR_FETCHING':
      return state;
    default:
      return state;
  }
};

export default playlist;
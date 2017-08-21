const video = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEO':
      return action.payload.data;
    default:
      return state;
  }
};

export default video;
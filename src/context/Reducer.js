const Reducer = (state, action) => {
  switch (action.type) {
    case "START_PLAYING":
      return {
        isPlaying: true,
        error: false,
      };
    case "STOP_PLAYING":
      return {
        isPlaying: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;

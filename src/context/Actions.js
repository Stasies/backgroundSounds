export const StartPlaying = (isPlaying) => ({
  type: "START_PLAYING",
  payload: isPlaying,
});
export const StopPlaying = (isPlaying) => ({
  type: "STOP_PLAYING",
  payload: isPlaying,
});

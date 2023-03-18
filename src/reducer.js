const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // "BQDpRTHWND6Qf78bJ3KsDK6jkzeETey2dT-bwcxchS_eGt6nIx_zmqDCT2FJLTzvDDhEM2NoKVWh4uRKo7qiKznLtiLHmnyYPm5HaRcr5FRS9wVFWB3hRT-26Ey54gBDOJPAx5OUcYi98D24HnKJVtUD0gZfK6OYu-iw7ygfAtp_9xtqMGVSrTfCIwxk",
  // discover_weekly: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      console.log(action);
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      console.log(action);
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export { initialState };
export default reducer;

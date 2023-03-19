export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
  // "BQAnVarGZ_37HoJpdvHDVM_-D-grJQ8-V2xRzEkD0kPuIWNkR5hRC37cGBsSoxnjP8VF1l4ly-PnjUzGU48M_BsSSiLxoX8xhiSPjwcDwsCmzzr0flK7k7azPOEWlUT0i7CK9ntsEYDhIpMsu6ccFXG7KbU4rUttZg0IQfWhSQyQW3JHY3897yje_8PAA3WcHgeVXUzxdB9Ag5eheXGfD1EK3icYtpsmmlcV53go1xgX",
  // "BQDpRTHWND6Qf78bJ3KsDK6jkzeETey2dT-bwcxchS_eGt6nIx_zmqDCT2FJLTzvDDhEM2NoKVWh4uRKo7qiKznLtiLHmnyYPm5HaRcr5FRS9wVFWB3hRT-26Ey54gBDOJPAx5OUcYi98D24HnKJVtUD0gZfK6OYu-iw7ygfAtp_9xtqMGVSrTfCIwxk",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      console.log(action.token);

      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

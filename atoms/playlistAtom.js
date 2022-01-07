import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID (with respect to other atoms/selectors)
  default: "21Z6C2z4hsVhqT4fy0JK8c", // default value (aka initial value)
            
});



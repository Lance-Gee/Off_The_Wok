import React, { createContext, useState } from 'react';

export const SpotifyContext = createContext();

export const SpotifyProvider = (props) => {
  const [token, setToken] = useState();
  const [episodes, setEpisodes] = useState();
  const [totalTracks, setTotalTracks] = useState([]);

  return (
    <SpotifyProvider
      value={{
        token: [token, setToken],
        episodes: [episodes, setEpisodes],
        totalTracks: [totalTracks, setTotalTracks],
      }}
    >
      {props.children}
    </SpotifyProvider>
  );
};

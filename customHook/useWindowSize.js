import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState();
  const isWindowClient = typeof window === 'object';

  useEffect(() => {
    isWindowClient ? window.innerWidth : undefined;
  }, []);

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener('resize', setSize);

      //un-register the listener
      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, setWindowSize]);
  //☝️

  return windowSize;
}

export default useWindowSize;

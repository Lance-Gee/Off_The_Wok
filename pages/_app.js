import '../styles/globals.css';

// own css files here
// import 'bootstrap/dist/css/bootstrap.css';

import Head from 'next/head';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

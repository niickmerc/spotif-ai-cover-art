import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import './styles.css';


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Function to extract the access token from the URL fragment
    const getAccessToken = () => {
      const hash = router.asPath.split('#')[1];
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      // Now you have the access token, you can use it globally or pass it down to the pages
      console.log('Access Token:', accessToken);
      // You can store the access token in state or context to make it available to all pages
    };

    getAccessToken();
  }, [router.asPath]);

  return <Component {...pageProps} />;
};

export default MyApp;
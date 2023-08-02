import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SpotifyCallback = () => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  useEffect(() => {
    // Function to extract the access token from the URL fragment
    const getAccessToken = () => {
      const hash = router.asPath.split('#')[1]; // Use router.asPath instead of window.location.hash
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      // Now you have the access token, you can use it to make API calls
      return accessToken;
    };
    const accessToken = getAccessToken();
    setIsRedirecting(true);

    router.push({
        pathname: '/reactbase', // Redirect to /reactbase
        query: { access_token: accessToken }, // Pass the access token as a query parameter
    });
    // getting an error here, cant figure it out

  }, [router.asPath]); // Add router.asPath to the dependencies array

  return (
    <div>
      <h1>Spotify Callback</h1>
      {isRedirecting && (
        <div>
          Redirecting... Please wait.
        </div>
      )}
    </div>
  );
};

export default SpotifyCallback;
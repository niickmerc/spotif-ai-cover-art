import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const SpotifyCallback = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to extract the access token from the URL fragment
    const getAccessToken = () => {
      const hash = router.asPath.split('#')[1]; // Use router.asPath instead of window.location.hash
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');
      // Now you have the access token, you can use it to make API calls
      console.log('Access Token:', accessToken);
    };

    getAccessToken();
  }, [router.asPath]); // Add router.asPath to the dependencies array

  return (
    <div>
      <h1>Spotify Callback</h1>
      {/* You can add any content or redirect the user to another page after extracting the access token */}
    </div>
  );
};

export default SpotifyCallback;
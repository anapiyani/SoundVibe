const clientId: string = '8fb4e6b3e50e49d6bfeb840c5d8a511a';
const clientSecret: string = '5c3fb1361fd94baa9c8fa1b8a9729f84';

const getAccessToken = async (): Promise<string> => {
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(credentials);
  
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64Credentials}`
      },
      body: 'grant_type=client_credentials' 
    });
  
    if (!authResponse.ok) {
      throw new Error(`Failed to get access token: ${authResponse.statusText}`);
    }
  
    const authData = await authResponse.json();
    return authData.access_token;
  };
  

  export const searchSongs = async (query: string): Promise<any> => {
    try {
      const accessToken = await getAccessToken();
  
      const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
  
      if (!searchResponse.ok) {
        throw new Error(`Search request failed: ${searchResponse.statusText}`);
      }
  
      const searchData = await searchResponse.json();
      return searchData.tracks.items;
    } catch (error) {
      console.error('Error searching songs:', error);
      throw error;
    }
  };
  
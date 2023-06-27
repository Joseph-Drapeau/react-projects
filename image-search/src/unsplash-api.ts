import axios from 'axios';

const searchImages = async (searchTerm: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ' + import.meta.env.VITE_UNSPLASH_API_KEY,
        },
        params: {
            query: searchTerm,
        },
  });
  console.log(response.data.results)
  return response.data.results;
};

export {searchImages};

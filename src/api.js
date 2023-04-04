import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JlZJt1y-HoihHRSpbEsvwn9JE2zYaJ2Of2hXzhfXWPw",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

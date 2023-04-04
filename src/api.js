import axios from "axios";

const searchImages = async() =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID JlZJt1y-HoihHRSpbEsvwn9JE2zYaJ2Of2hXzhfXWPw'

        },
        params:{
            query:'dogs'
        }
    });
    console.log(response);
    return response;
};

export default searchImages;
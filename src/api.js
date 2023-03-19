import axios from 'axios';


const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos' , {
    headers : {
        Authorization: 'Client-ID o2X9MZJbyv7F5UjT1VAdUyGlsdxa2b_1bG8VinlHyYo'
    },
    params:{
        query:term,
    }
   });
   //when we use response we dont want the whole api object to return 
   // therefore we will use reponse.data.result to get the array of images that we want
   return response.data.results;
};

export default searchImages;  
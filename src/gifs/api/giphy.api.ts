import axios from "axios";


const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
        limit: 25,
        lang: 'en',
        bundle: 'messaging_non_clips',

    }
})
import { GiphyResponse } from "../interfaces/giphy.response"
import { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQuery = async (query: string): Promise <Gif[]> => {
    
    const response = giphyApi.get<GiphyResponse>("/search", {
        params: {
            q: query,
        }
    });

    return (await response).data.data.map((gif)=>({ 
        id: gif.id,
        title: gif.title,
        url:gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));

}

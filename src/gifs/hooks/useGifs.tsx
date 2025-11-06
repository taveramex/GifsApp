import { useState } from "react";
import { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query-action";

const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {

    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleQuerySearch = async (term: string) => {
        // Trim and Convert to lower cases
        term = term.trim().toLowerCase();

        if (!term) return;
        // ignore empty terms
        
        // if the actual search its already there then ignore and getout!
        if (previousSearches.includes(term)) {
                return;
        }

        const updated = [term, ...previousSearches].splice(0, 8);
        setPreviousSearches(updated);

        const gifsByQuery: Gif[] = await getGifsByQuery(term);
        setGifs(gifsByQuery);

        gifsCache[term] = gifsByQuery;
        console.log(gifsCache);
    }

    const handleTermClicked = async (term: string) => {
        if (gifsCache[term]) {
            setGifs(gifsCache[term]);
        } else {
            const gifsByQuery: Gif[] = await getGifsByQuery(term);
            setGifs(gifsByQuery);
        }

    };

    return {
        gifs,
        previousSearches,

        handleQuerySearch,
        handleTermClicked,
    }

}
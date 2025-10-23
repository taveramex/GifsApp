import GenericHeader from "./shared/components/GenericHeader";
import GenericSearch from "./shared/components/GenericSearch";
import PreviousSearches from "./gifs/components/PreviousSearches";
import GifList from "./gifs/components/GifList";
import { Gif } from "./gifs/interfaces/gif.interface";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query-action";

const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleQuerySearch = async (term: string) => {
        // Trim and COnvert to lower cases
        term = term.trim().toLowerCase();
        // ignore empty terms
        if(!term) return;
        // if the actual search its already there then ignore and getout!
        if(previousSearches.includes(term)) return;
        
        const updated = [term, ...previousSearches].splice(0,8);
        setPreviousSearches(updated);

        const gifsByQuery:Gif[] = await getGifsByQuery(term);
        setGifs(gifsByQuery);
    }

    const handleTermClicked = (term: string) => (console.log(term));

    return (
        <>
            {/* Header */}
            <GenericHeader title="Buscador de Gifs" subtitle="Encuentra los mejores gifs aqui" />

            {/* Search */}
            <GenericSearch buttonText="Buscar" placeholder="Buscar gifs..." onQuery = {handleQuerySearch} />

            {/* busquedas previas */}
            <PreviousSearches key='previousSearch' searches={previousSearches} onLabelClicked={handleTermClicked} />

            {/* List of Gifs */}
            <GifList key='gifList' gifs={gifs} />
        </>
    );

}
export default GifsApp;
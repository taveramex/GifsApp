import GenericHeader from "./shared/components/GenericHeader";
import GenericSearch from "./shared/components/GenericSearch";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mocks/gifs.mocks";
import GifList from "./gifs/components/GifList";
import { useState } from "react";

const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState(['gatos']);

    const handleQuerySearch = (term: string) => {
        console.info('searched term: ' + term);
        setPreviousSearches([term]);
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
            <GifList key='gifList' gifs={mockGifs} />
        </>
    );

}
export default GifsApp;
import GenericHeader from "./shared/components/GenericHeader";
import GenericSearch from "./shared/components/GenericSearch";
import PreviousSearches from "./gifs/components/PreviousSearches";
import GifList from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

const GifsApp = () => {
    const {gifs, previousSearches, handleQuerySearch, handleTermClicked} = useGifs();

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
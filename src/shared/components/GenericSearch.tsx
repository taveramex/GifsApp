import { FC, useState } from "react";

interface Props {
    placeholder?: string,
    buttonText?: string,
    onQuery: (term: string) => void,
}
const GenericSearch: FC<Props> = ({ buttonText = "Search", placeholder = "generic search", onQuery }) => {
    const [query, setQuery] = useState("");

    const handleQuerySearch = () => {
        onQuery(query);
    }
    const handleEnter = (event:React.KeyboardEvent) => {
        if(event.key==='Enter'){
            handleQuerySearch();
        }
    };

    return (
        <div className="search-container">
            <input id='searchTxt' type="text" 
                value={query} placeholder={placeholder} 
                onKeyDown={handleEnter}
                onChange={(event) => setQuery(event.target.value)}  />
            <button onClick={handleQuerySearch}>{buttonText}</button>
        </div>
    )
}

export default GenericSearch

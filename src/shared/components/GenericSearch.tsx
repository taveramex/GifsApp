import { FC, useEffect, useState } from "react";

interface Props {
    placeholder?: string,
    buttonText?: string,
    onQuery: (term: string) => void,
}
const GenericSearch: FC<Props> = ({ buttonText = "Search", placeholder = "generic search", onQuery }) => {
    const [query, setQuery] = useState("");
    
    useEffect(()=>{
        const timeOutId = setTimeout(() =>{
            onQuery(query);
        },700);
        return ()=>{
            console.log('reset timer');
            clearTimeout(timeOutId);
        };
    },[query, onQuery]);

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

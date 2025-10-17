import { FC } from "react";

interface Props {
    searches?: string[];
    onLabelClicked: (term:string) => void;
}

const PreviousSearches: FC<Props> = ({ searches = [], onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas Previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((prevSearch) => (
                        <li key={prevSearch} onClick={ ()=> { onLabelClicked(prevSearch) } }>{prevSearch}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PreviousSearches

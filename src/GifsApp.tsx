import { Gif, mockGifs } from "./Mocks/gifs.mocks";

const GifsApp = () =>{
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Encuentra los mejores gifs aqui</p>
            </div>

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs..." />
                <button>Buscar</button>
            </div>

            {/* busquedas previas */}
            <div className="previous-searches">
                <h2>Busquedas Previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Vegeta</li>
                    <li>Piccolo</li>
                    <li>Freezer</li>
                </ul>
            </div>
            {/* List of Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map( (gif:Gif) => {
                        return (
                            <div key={gif.id} className = "gif-card">
                                <img src={gif.url} alt= {gif.title} />
                                <h3>{gif.title}</h3>
                                <p>{gif.width} x {gif.height} (1.5mb)</p>
                            </div>
                        );
                    })
                }
            </div>

        </>
    );

}
export default GifsApp;
import GifItem, { Gif } from "./GifItem";

interface Props{
    gifs: Gif[]
}

const GifList = ({gifs}: Props) => {
    return (
        <div className="gifs-container">
            {
                gifs.map((gif: Gif) => {
                    return (
                        <GifItem key={gif.id} {...gif}  />
                    );
                })
            }
        </div>
    )
}

export default GifList

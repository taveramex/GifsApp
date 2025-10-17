export interface Gif {
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

const GifItem = (gif:Gif) => {
    return (
        <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>{gif.width} x {gif.height} (1.5mb)</p>
        </div>
    )
}

export default GifItem

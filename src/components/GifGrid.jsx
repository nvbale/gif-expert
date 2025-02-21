import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {/*{isLoading ? <h2>Cargando...</h2> : null}*/}
            {/*<LoadingMessage isLoading={isLoading} />*/}
            {isLoading && <h2>Cargando...</h2>}

            <div className={"card-grid"}>
                {images.map(image => (
                    <GifItem
                        key={image.id}
                        // title={image.title}
                        // url={image.url}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: String,
}
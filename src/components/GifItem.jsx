export const GifItem = ({title, url}) => {

    return (
        <div className={"card"}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
GifItem.propTypes = {
    title: String,
    url: String,
}

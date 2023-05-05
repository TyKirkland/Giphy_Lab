const GiphyDisplay = (props) => {

    const noGif = () => {
        return (
            <h3>Click the button to display a completely random gif!</h3>
        )
    }

    const Gif = () => {
        return (
            <>
                <img src={props.giphy.data.images.original.url}></img>
            </>
        )
    }

    return props.giphy ? Gif() : noGif();
}

export default GiphyDisplay;
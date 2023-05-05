const RandomButton = (props) => {

    const buttonPush = (event) => {

        event.preventDefault();

        props.randomGif();

    }

    return (
        <>
            <button onClick={ buttonPush }>Generate Random Gif</button>
            <br />
        </>
    )
}

export default RandomButton;
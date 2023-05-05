import './App.css';
import { useState } from 'react';
import GiphyDisplay from './components/GiphyDisplay';
import RandomButton from './components/RandomButton';
import Title from './components/Title';

function App() {

  const [ giphy, setGiphy ] = useState(null);

  //using a random api
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=uMuzPAqvz7m4hKEXSh6SoJrgHaKzVOmJ&tag=&rating=g'

  const getGiphy = async () => {

    const response = await fetch(url);

    const data = await response.json();

    setGiphy(data);

  }

  return (
    <div className="App">
      <Title />
      <RandomButton randomGif = { getGiphy }/>
      <GiphyDisplay giphy = { giphy }/>
    </div>
  );
}

export default App;

import React from 'react'
import NavBar from './NavBar.js'
import GifListContainer from "../containers/GifListContainer";


// the App component should render out the GifListContainer component 
const App = () => {

    return (
        <div>
            < NavBar color='black' title="Giphy Search" />
            <GifListContainer />
        </div>
    )
}

export default App

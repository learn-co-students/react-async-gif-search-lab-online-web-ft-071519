import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
    state = {
        threeGifs: []
    };

    fetchGif(search) {
        // console.log("I'm going to fetch now.")
        console.log(search)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=3nBn1w0c4drwhG3pSlPj6ecTPgGUZL3F&q=${search}&limit=3&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(json => this.setState({ threeGifs: json.data}))
        .catch(error => console.log(error));
    }
    
    render() {
        // console.log(this.state.threeGifs)
        return (
            <div>
                {/* Make sure to bind "this" even in the call back props.*/ }
                <GifSearch fetch={this.fetchGif = this.fetchGif.bind(this)} />
                <GifList gifs={this.state.threeGifs} />
            </div>
        )
    }
}
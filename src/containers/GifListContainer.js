import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    state = {
        gifs: []
    };

    fetchGifs = (queryTerm = "Bob's Burgers") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${queryTerm}&api_key=1lAtpSWMl9IZ9k9siKnJgS4pwdm0pV1v&limit=3`)
            .then(resp => resp.json())
            .then(({ data }) => {
                this.setState({ gifs: data.map(g => ({ url: g.images.original.url })) })
            })
    };
    componentDidMount() {
        this.fetchGifs();
    };

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    };

};
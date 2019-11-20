import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList';

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifArray: []
        }
    }

    handleSubmit = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=flFlhYPaHtE4ntLHncLLuWv4p2USgrgg&rating=g`)
            .then(response => response.json())
            .then(data => {
                let gifs = []
                gifs.push(data.data[0].images.original.url)
                gifs.push(data.data[1].images.original.url)
                gifs.push(data.data[2].images.original.url)
                this.setState({
                    gifArray: gifs
                })
            })
    }


    render() {
        return (
            <div>
                <GifList gifArray={this.state.gifArray} />
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
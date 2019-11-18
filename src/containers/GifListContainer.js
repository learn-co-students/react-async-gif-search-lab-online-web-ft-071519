import React, {Component} from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
        let search = event.target.firstElementChild.value

        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=JlJt7X59C5rgZ2K2IwGJZvlAoFhdyMy3&rating=g`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: [
                        data.data[0].images.original.url,
                        data.data[1].images.original.url,
                        data.data[2].images.original.url
                    ]

                })
            })
    }


    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default GifListContainer;
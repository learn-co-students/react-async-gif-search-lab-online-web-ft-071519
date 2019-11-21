import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }


    //fetch to api, store first 3 gifs in state, then renders its subcomponent(GifList)
    fetchGIFs = (query = "dogs") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=9KgRXDa5lIyEwxRwjZ1V8H55f2x7aIGX`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
      this.fetchGIFs();
    }

    render(){
      return (
          <div>
            < GifList gifs={this.state.gifs} />
            < GifSearch handleSubmit={this.handleSubmit} />
          </div>
      )
    }
}
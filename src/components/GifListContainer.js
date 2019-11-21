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
    fetchGIFs = (query='dog') => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=9KgRXDa5lIyEwxRwjZ1V8H55f2x7aIGX`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
      this.fetchGIFs();
    }

    handleSubmit = e => {
      e.preventDefault();
      const searchQuery = e.target.querySelector('input').value;
      this.fetchGIFs(searchQuery)
    }

    render(){
      return (
          <div>
            < GifSearch handleSubmit={this.handleSubmit} />
            < GifList gifs={this.state.gifs} />
          </div>
      )
    }
}
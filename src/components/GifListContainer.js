import React from 'react';
import GifList from './GifListContainer'

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    //fetch to api, store first 3 gifs in state, then renders its subcomponent(GifList)
    componentDidMount() {
      fetch(`https://api.giphy.com/v1/gifs/search?q=dog&api_key=9KgRXDa5lIyEwxRwjZ1V8H55f2x7aIGX`)
      .then(response => response.json())
      .then(object => this.setState({
          gifs: object.data.slice(0, 3)
      }))
    }

    render(){
      return (
          < GifList gifs={this.state.gifs} />
      )
    }
}
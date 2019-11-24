import React, { Component } from "react";

export default class GifList extends Component {
    
    render() {
        //console.log(this.props.gifs)
        let gifArray = this.props.gifs

        let gifs = gifArray.map(gif => {
            return <li><img 
            src={gif.images.original.url} 
            alt={gif.title}
            key={gif.id} />
            </li>
        })
        return (
            <ul>
                {gifs}
            </ul>
        )
    }
}


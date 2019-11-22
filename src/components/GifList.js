import React from 'react'

class GifList extends React.Component {

    renderGifs = () => {
        console.log(this.props.urlsArray)
        return this.props.urlsArray.map((url, i) => {
            return <li><img src={url} alt={i} key={i}/></li>
        })
    }
    
    render(){
        return(
        <ul>{this.renderGifs()}</ul>
        )
    }
}

export default GifList
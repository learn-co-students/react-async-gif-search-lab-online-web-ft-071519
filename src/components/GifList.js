import React from 'react'

class GifList extends React.Component {

    renderGif = () => {
        this.props.urls.forEach(url =>{
            return <li><img src={url} alt=""/></li>
            })
    }
    

    render(){
        return(
        <ul>{this.renderGif()}</ul>
        )
    }
}

export default GifList
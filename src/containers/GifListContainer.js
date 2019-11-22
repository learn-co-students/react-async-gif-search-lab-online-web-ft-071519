import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    
    state = {
        gifsurls: []
    }
    
    componentDidMount() {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=RmX6ryJ4LGv3hP6WEug3pSstURBoGjFh&rating=g`)
            .then(resp => resp.json())
            .then(gifs => this.selectGifs(gifs))
    }
                
    selectGifs = (gifs) => {
        console.log(gifs)
            let urls = []
            for (let i=0; i<3; i++) {
                urls.push(gifs.data[i].images.original.url)
            }
            this.setState({
                gifsurls: urls
                })
    }

    getGifsData = (searchword) => {
       
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchword}&api_key=RmX6ryJ4LGv3hP6WEug3pSstURBoGjFh&rating=g`)
        .then(resp => resp.json())
        .then(gifs => this.selectGifs(gifs))
    }


    render (){
        
        return(
            <div>
                <div><GifSearch getGifsData={this.getGifsData} /></div>
                <div><GifList urlsArray={this.state.gifsurls} /></div>
            </div>
        )
    }
}

export default GifListContainer
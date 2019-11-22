import React from 'react';
import GifList from '../components/GifList';
// import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    
    state = {
        gifsurls: []
    }

    getGifsData = (dolphin) => {
        let getURL = (dolphin) => {`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=RmX6ryJ4LGv3hP6WEug3pSstURBoGjFh&rating=g`};
        console.log(getURL)
        fetch(getURL(dolphin))
        .then(resp => resp.json())
        .then(gifs => this.selectGifsUrls(gifs))
    }
    
    selectGifsUrls = (gifs) => {
        let selectedData = []
        for(let i=0; i<2; i++){
            gifs.push(gifs.data[i].images.original.url)
        }
        this.setState({
            gifsURLs: selectedData
        })
    }

    render (){
        return(
            <div>
                <div><GifList urls={this.state.gifsurls} /></div>
                {/* <div><GifSearch getGifsData={this.getGifsData} /></div> */}
                {this.getGifsData()}
           </div>
        )
    }
}

export default GifListContainer
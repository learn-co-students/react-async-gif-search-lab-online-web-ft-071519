import React from "react";
import GifList from "../components/GifList.js"
import GifSearch from "../components/GifSearch.js"

export default class GifListContainer extends React.Component {
    state = { item: [] };

    fetchGIFs = (search = "dolphins") => {
        fetch('https://api.giphy.com/v1/gifs/search?q=${search}&api_key=9Wj4353jpahcu3alwqIA5Fj1rD1LAsVF')
            .then(response => response.json())
            .then(d =>
                //console.log(d)
                this.setState({ item: [d.data[0], d.data[1], d.data[2]] })
            )
    }

    componentDidMount() {
        this.fetchGIFs
    }


    render() {


        return <div>
            <GifSearch func={this.fetchGIFs} />
            {this.state.item.map(p => <GifList type={p.type} id={p.id} slug={p.slug} url={p.images.original.url} />)}

        </div>

    }
}
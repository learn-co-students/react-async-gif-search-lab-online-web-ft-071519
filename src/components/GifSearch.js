import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        searchItem: ""
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.searchItem)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input type="text" value={this.state.searchItem} onChange={e => this.setState({ searchItem: e.target.value })} />

                </form>
           </div>             
                
        )
    }
}
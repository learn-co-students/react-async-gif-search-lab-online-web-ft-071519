import React from "react";

class GifSearch extends React.Component {

    state = {
        searchword: "dolphin"
    }
   
    handleChange = (event) => {
        this.setState({
            searchword: event.target.value
        })
        console.log(event.target.value)
        console.log(this.state.searchword)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifsData(this.state.searchword)
    }


    render() {
        return(
            <form onSubmit={event =>this.handleSubmit(event)}>
                <input type="text" name="search" value={this.state.searchword} onChange={event => this.handleChange(event)}></input>
                <button type="submit">Search</button>
            </form>

        )
    }
}

export default GifSearch
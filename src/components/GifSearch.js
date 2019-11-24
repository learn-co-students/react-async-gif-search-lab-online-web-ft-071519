import React, { Component } from "react";

export default class GifSearch extends Component {
    constructor() {
        super();
        // Binding "this" to the method is critical.
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
        search: ""
        }
    }

    componentDidMount() {
        // console.log("GifSearch")
        // this.props.fetch("hello")
    }

    handleChange(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props)
        // Pass this.state.search to GifListContainer to fetch.
        return (this.props.fetch(this.state.search))
    }

    render() {
        // console.log("Hit GifSearch")
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="search" onChange={this.handleChange}>
                </input>
                <input type="submit"></input>
            </form>
        )
    }
}
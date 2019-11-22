
import React from "react";
import GifListContainer from '../containers/GifListContainer'


export default class GifSearch extends React.Component {
    state = {
        search: "",

    };


    handleSubmit = e => {
        e.preventDefault();

        this.props.func(this.state.search)
    };

    handleInputChange = e => {
        this.setState({
            [e.target.id]:
                e.target.value
        });
        console.log(this.state.search)
    };


    render() {


        return <div>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Enter A search Term: </label>{" "}
                <input
                    id="search"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
                <br />

                <input type="submit" />
            </form>

        </div>

    }
}


        // <form onSubmit={this.handleSubmit}>
        //     <label htmlFor="search">Enter A search Term: </label>{" "}
        //     <input
        //         id="search"
        //     //   value={this.state.name}
        //     //   onChange={this.handleInputChange}
        //     />
        //     <br />

        //     <input type="submit" />
        // </form>
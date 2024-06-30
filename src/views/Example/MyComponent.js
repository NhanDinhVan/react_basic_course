import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Nhan dinh",
        chanel: "NhanDinhVan"
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return <h3>
            <input value={this.state.name}
                onChange={(event) => this.handleOnChangeName(event)
                } />
            {console.log("my name is: ", this.state.name)}
            <p>Name: {this.state.name}</p>
            <p>Chanel: {this.state.chanel}</p>
        </h3>
    }
}
export default MyComponent;
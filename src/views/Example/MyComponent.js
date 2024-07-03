import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }
    onChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    onChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    onClickMe = (event) => {
        event.preventDefault()
        alert("Click Me ?")
    }

    render() {
        return <>
            <form >
                <label>First name: {this.state.firstName}</label><br />
                <input type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.onChangeFirstName(event)}
                ></input><br />
                <label>Last name: {this.state.lastName}</label><br />
                <input type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.onChangeLastName(event)}
                ></input><br /><br />
                <input type="button" value="Submit"
                    onClick={(event) => this.onClickMe(event)}></input>
            </form>
        </>
    }
}
export default MyComponent;
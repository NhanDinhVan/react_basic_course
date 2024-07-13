import React from "react";
import ChildComponent from "./ChildComponent";
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
        alert("First name: " + this.state.firstName + "\nLast name: " + this.state.lastName)
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
            <ChildComponent
                name={'nhan'}
                age={'25'}
            ></ChildComponent>
            <ChildComponent
                name={'dinh'}
                age={'30'}
            ></ChildComponent>
        </>
    }
}
export default MyComponent;
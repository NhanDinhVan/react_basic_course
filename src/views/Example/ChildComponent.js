import React from "react";

class ChildComponent extends React.Component {
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
        alert(this.state)
    }

    render() {
        return <>
            <div>
                Child Component: {this.props.name}
            </div>
        </>
    }
}
export default ChildComponent;
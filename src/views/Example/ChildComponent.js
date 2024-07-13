import React from "react";

class ChildComponent extends React.Component {
    // state = {
    //     firstName: "",
    //     lastName: ""
    // }
    // onChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // onChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // onClickMe = (event) => {
    //     event.preventDefault()
    //     alert(this.state)
    // }

    render() {
        // let name = this.props.name
        // let age = this.props.age
        const { name, age } = this.props;
        console.log(">>> Check props: " + this.props)
        return <>
            <div>
                Child Component: {name + "-" + age}
            </div>
        </>
    }
}
export default ChildComponent;
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
        const { firstName, lastName, classList } = this.props;
        console.log(">>> Check props: " + this.props)
        return <>
            <div className="my-3">
                Full Name: {firstName + " " + lastName}
            </div>
            <div>
                <h3 className="text-warning my-3">Your class:</h3>
                {
                    classList.map((item, classList) => {
                        return (
                            <div key={item.className}>
                                {item.className} - {item.teacherName}
                            </div>
                        )
                    })
                }
            </div>
        </>
    }
}
export default ChildComponent;
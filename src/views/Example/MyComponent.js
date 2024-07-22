import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        classList: [
            { className: "Math", teacherName: "Tran Van Dai" },
            { className: "English", teacherName: "Nguyen Hong Viet" }
        ]
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

            <div className="col-12 d-flex ">
                <div className="col-6 d-flex">
                    <AddComponent></AddComponent>
                </div>

                <div className="col-6">
                    <ChildComponent
                        classList={this.state.classList}
                    ></ChildComponent>
                </div>
            </div>
        </>
    }
}
export default MyComponent;
import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
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
                    <form className="d-flex justify-content-center flex-wrap">
                        <div>
                            <label>First name:</label><br />
                            <input type="text"
                                value={this.state.firstName}
                                onChange={(event) => this.onChangeFirstName(event)}
                                className=""
                            ></input><br />
                        </div>
                        <div>

                            <label>Last name:</label><br />
                            <input type="text"
                                value={this.state.lastName}
                                onChange={(event) => this.onChangeLastName(event)}
                            ></input><br /><br />
                        </div>
                        <input type="button" value="Submit"
                            className="col-6"
                            onClick={(event) => this.onClickMe(event)}></input>
                    </form>
                </div>

                <div className="col-6">
                    <ChildComponent
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        classList={this.state.classList}
                    ></ChildComponent>
                </div>
            </div>
        </>
    }
}
export default MyComponent;
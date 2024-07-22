import React from "react";
class AddComponent extends React.Component {
    state = {
        className: "",
        teacherName: ""
    }
    onChangeClassName = (event) => {
        this.setState({
            className: event.target.value
        })
    }
    onChangeTeacherName = (event) => {
        this.setState({
            teacherName: event.target.value
        })
    }
    onClickMe = (event) => {
        event.preventDefault()
        alert(" Class name: " + this.state.className + "\n Teacher name: " + this.state.teacherName)
    }
    render() {
        return (
            <div className="col-12">
                <form className="d-flex justify-content-center flex-wrap col-12 m-2">
                    <div className="col-6">
                        <label>First name:</label><br />
                        <input type="text"
                            value={this.state.className}
                            onChange={(event) => this.onChangeClassName(event)}
                            className="col-12"
                        ></input><br />
                    </div>
                    <div className="col-6">
                        <label>Last name:</label><br />
                        <input type="text"
                            value={this.state.teacherName}
                            onChange={(event) => this.onChangeTeacherName(event)}
                            className="col-12"
                        ></input><br /><br />
                    </div>
                    <input type="button" value="Submit"
                        className="col-6"
                        onClick={(event) => this.onClickMe(event)}></input>
                </form>
            </div>
        )
    }
}

export default AddComponent;
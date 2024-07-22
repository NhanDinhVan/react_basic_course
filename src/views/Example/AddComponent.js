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
            <div className="col-12 p-5">
                <form className="d-flex justify-content-center flex-wrap col-12">
                    <div className="col-6 col-md-5">
                        <label>First name:</label><br />
                        <input type="text"
                            value={this.state.className}
                            onChange={(event) => this.onChangeClassName(event)}
                            className="col-10 col-md-12"
                        ></input><br />
                    </div>
                    <div className="col-6 col-md-5">
                        <label>Last name:</label><br />
                        <input type="text"
                            value={this.state.teacherName}
                            onChange={(event) => this.onChangeTeacherName(event)}
                            className="col-10 col-md-12"
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
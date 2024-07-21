import React from "react";

class ChildComponent extends React.Component {
    state = {
        isShow: false
    }
    onChangeHideShowState = (state) => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
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
        let { isShow } = this.state
        console.log(">>> Check props: " + this.props)
        return <>
            <div className="my-3 ">
                <h3><i className="m-3">Full Name: </i><i className="text-primary">{firstName + " " + lastName}</i></h3>
            </div>
            <div>
                <h3 className="my-3">
                    <i className="m-3">Your class:</i>
                    <button onClick={() => this.onChangeHideShowState()}>Hide&Show</button>
                </h3>
                {
                    classList.map((item, classList) => {
                        return (
                            <>
                                {
                                    isShow &&
                                    <div className="text-primary" key={item.className}>
                                        {item.className} - {item.teacherName}
                                    </div>
                                }

                            </>
                        )
                    })
                }
            </div>
        </>
    }
}
export default ChildComponent;
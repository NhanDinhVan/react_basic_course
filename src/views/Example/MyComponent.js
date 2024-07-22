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
    render() {
        return <>

            <div className="col-12 d-flex flex-wrap">
                <div className="col-12 d-flex col-md-8">
                    <AddComponent></AddComponent>
                </div>

                <div className="col-12 col-md-4">
                    <ChildComponent
                        classList={this.state.classList}
                    ></ChildComponent>
                </div>
            </div>
        </>
    }
}
export default MyComponent;
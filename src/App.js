import React from "react";
import Form from "./Form";
import Display from "./Display";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: []
        }

        this.submitData = this.submitData.bind(this)
    }

    submitData(e) {
        this.setState({
            data: this.state.data.concat(e)
        })
    }

    render() {
        return (
            
            <div className="container">
                <Form 
                    inputData = {
                        {
                            id: 1,
                            name: "Informations",
                            inputs: [
                                {type: "text", placeholder: "First name", value: "firstName"},
                                {type: "text", placeholder: "Last name", value: "lastName"},
                                {type: "text", placeholder: "Birthday", value: "birthDay"},
                                {type: "text", placeholder: "Job", value: "job"}
                            ],
                            buttons: [
                                {type: "submit", title: "Submit"}
                            ]
                        }
                    }

                    submitData = {this.submitData}
                />


                <Form 
                    inputData = {
                        {
                            id: 2,
                            name: "Experiences",
                            inputs: [
                                {type: "text", placeholder: "Company Name", value: "companyName"},
                                {type: "text", placeholder: "Role", value: "role"},
                                {type: "date", placeholder: "From", value: "from"},
                            ],
                            buttons: [
                                {type: "submit", title: "Add"}
                            ]
                        }
                    }

                    submitData = {this.submitData}
                />

                {this.state.data.length > 0 ?
                    <div>
                        <Display data={this.state.data} id={1} />
                        <Display data={this.state.data} id={2} />
                    </div>
                :
                    <div></div>
                } 

            </div>
           
        )
    }
}

export default App
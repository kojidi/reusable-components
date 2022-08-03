import React from "react";
import "./styles/Form.css";

class Form extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            editStatus: false,
            inputs: null,
        }

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        const inputsObject = {}
        inputsObject['id'] = this.props.inputData.id
        inputsObject['name'] = this.props.inputData.name
        this.props.inputData.inputs.map(e => inputsObject[e.value] = "");

        this.setState({
            inputs: inputsObject
        })
    }

    changeHandler(name, e) {
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: e.target.value,
            }
        }))
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.submitData(this.state.inputs);

        const inputsObject = {};
        inputsObject['id'] = this.props.inputData.id;
        inputsObject['name'] = this.props.inputData.name;
        this.props.inputData.inputs.map(e => inputsObject[e.value] = "");

        this.setState({
            inputs: inputsObject
        })

    }

    render() {
        const data = this.props.inputData;
        return (
            <div className="form-container">
                {this.state.editStatus ? 
                    <h1>Edit Form</h1>
                :
                    <form onSubmit={this.submitHandler}>
                        {data.inputs.map((i, id) => (
                            <input key={id} type={i.type} placeholder={i.placeholder} value={this.state.inputs ? this.state.inputs[i.value] : ""} onChange={this.changeHandler.bind(this, i.value)}/>
                        ))}
                        {data.buttons.map((b, id) => (
                            <button key={id} type={b.type} onClick={this.submitHandler}>{b.title}</button>
                        ))}
                        
                    </form>
                }

            </div>
        )
    }
}

export default Form
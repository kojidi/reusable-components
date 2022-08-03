import React from "react";

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, id} = this.props
        const keys = data.filter(d => d.id === id).map(k => Object.keys(k))[0];
        keys.pop('id');
        console.log(keys);
        return (
            <div className="display-container">
                {data.map((d, i) => (
                    d.id === id ?
                        <div key={i} style={{backgroundColor: "#f5f5f5"}}>
                            <h4>{i + 1}</h4>
                            {keys.map((k, i) => (
                               <p key={i}>{d[k]}</p>
                            ))}
                        </div>
                    : 
                        ""
                ))}
            </div>
        )
    }
}

export default Display
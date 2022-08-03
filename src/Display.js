import React from "react";

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, id} = this.props
        const finalData = data.filter(d => d.id === id);
        let keys = finalData.length > 0 ? finalData.map(k => Object.keys(k))[0] : [];
        if(keys.length > 0) {
            keys.splice(keys.indexOf('id'), 1);
            keys.splice(keys.indexOf('name'), 1);
        }

        return (
            finalData.length > 0 ?
                <div className="display-container">
                    <h2>{finalData[0].name}</h2>
                    {finalData.map((d, i) => (
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
            :
                ""
        )
    }
}

export default Display
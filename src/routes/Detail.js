import React from "react";

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        return <span>1</span>
    }
}

export default Detail;
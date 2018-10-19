import React from 'react';
import Background from "../images/spacewindow.png";

const backgroundStyle = {
    width: "100%",
    height: "100%"
}

const buttonStyle = {
    position: "absolute",
    left: "40%",
    top: "43%",
    width: "200px",
    height: "70px"
}

const LandingPage = () => {
    return (
        <div>
        <img src={Background} style={ backgroundStyle } alt="BackgroundImage"/>
       
        <button className="btn waves-effect waves-light" type="submit" name="action" style={ buttonStyle }>Submit</button>
        
        
        </div>
    )
}

export default LandingPage;
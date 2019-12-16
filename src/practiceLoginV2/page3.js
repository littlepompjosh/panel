import React, { Component } from 'react';

class Tifanny extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <video id="dellomas" loop autoPlay>
                <source src="https://thumbs.gfycat.com/TestyAptEelelephant-mobile.mp4" type="video/mp4" />
                <source src ="https://thumbs.gfycat.com/TestyAptEelelephant-mobile.mp4" type="video/ogg"/>
            </video>
         );
    }
}
 
export default Tifanny;
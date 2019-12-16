import React, { Component } from 'react';


class Yey extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="jobelle">
                <div> 
                    <ul>
                        <li><a href="https://www.facebook.com/clydekrizem.garcia.7">About</a></li>
                        <li><a href="https://twitter.com/KenjiPPogi">Contact</a></li>
                        <li><a href="https://twitter.com/clyde_2930">News</a></li>
                        <li><a href="#home">Home</a></li>
                    </ul>
                </div>

                <div className="camina">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KGxbbqLYkpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qdphssp8D00" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FzVR_fymZw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
         );
    }
}
 


export default Yey;
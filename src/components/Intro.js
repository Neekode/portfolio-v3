import React from 'react';
import Ballpit from './Ballpit.js';
import Navbar from './Navbar.js';

function Intro() {

  return (
    <div className="Intro">
        <Ballpit /> 

        <div className="container center">
            <span>Neeko Blomgren:</span>
            <br />
            
              <span> Web Developer</span>
            <br /> 

            {/* <p className="description center"> Hello! I specialize in the Front-end, specifically with React.
                                            I'm based out of Seattle, WA. Thanks for stopping by. </p> */}
            
            <Navbar />
        </div>
    </div>
  );
}

export default Intro;
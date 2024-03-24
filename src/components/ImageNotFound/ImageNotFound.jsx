import './ImageNotFound.css';
import React from 'react';
import Lottie from "react-lottie";
import animation from '../Animation/ani.json';
const ImageNotFound = ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className="image-not-found-conatiner">
             <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
        </div>
    );
};
export default ImageNotFound;
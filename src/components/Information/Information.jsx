import Image from '../Media/info.png';
import './Information.css';

const Information = ()=>{
    return (
        <>
         <div className="info-conatiner">
            
            <div className="info-data-conatiner">
                <div>
                <h1>Welcome to <span>ImageSeeker</span></h1>
                <p>✴️ Find Exactly What You're Looking For.</p>
                <p>✴️ See Everything. Image Search Without Limits.</p>
                <p>✴️ Image Search Made Easy.</p>
                </div>
            </div>


            <div className="img-container">
                <img src={Image} alt="Infromation image" />
                <hr />
            </div>
            
            </div>

            

        </>
       

            

        
    );
};

export default Information;
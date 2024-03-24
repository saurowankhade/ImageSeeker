import ImagesShow from "../MainShow/ImagesShow";

import {useState ,useEffect} from "react";

import Shimmer from "../ShimmerUI/Shimmer";
import ImageNotFound from "../ImageNotFound/ImageNotFound";
import './Search.css';


const Search = ()=>{
  const [imageData,setImageData] = useState([]);
  const [totalData,setTotalData] = useState(1);
  const [searchItem,setsearchItem] = useState("dog");
  const [pageNo,setPageNo] = useState(0);


  useEffect(()=>{
    api_data(searchItem);
  },[pageNo,searchItem]);


  const api_data = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${searchItem}&page=${pageNo}`);
    const data = await response.json();
    setImageData(data?.results);
    setTotalData(data.total);
    console.log(data);
    console.log(imageData);
    if(pageNo > 1){
      setImageData([...imageData, ...data?.results]);
    }
  };


  useEffect(()=>{
    const event = window.addEventListener("scroll",()=>{
      if ((window.innerHeight + window.scrollY)>= document.body.scrollHeight-2){
        setPageNo((oldPage)=>{
          return oldPage+1;
        });
      };
    });
    return ()=> window.removeEventListener('scroll',event);
  },[])
    return (
      
        <div className="body-container">


          <div className="search-container">
          <input type="text" name="search" id="search" placeholder="Search Here..."/>
            <button onClick={()=>{
              setImageData([...[]]);
              setPageNo(0);
              setsearchItem(document.getElementById("search").value);  
           }}>
            <i class="fa-solid fa-magnifying-glass"></i>
           </button>
          </div>
            <br /> <br />

            <div className="images-container">
            { totalData === 0 ? <ImageNotFound /> : 
            imageData.length === 0 ? (
              <div>
                 <Shimmer />
              </div>
              ) : (

                
        imageData.map((img, index) => (
          <ImagesShow key={index} imageData={img.urls.full} />
        ))
      )}
            </div>
          
        </div>
    );

};

export default Search;
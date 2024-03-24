import './Image.css';

const ImagesShow = (data)=>{
    return (
        <>
        <div className='container'>
            <div className='card'>
            <img className="img" src={data.imageData} alt="image_data"/>
            </div>
        </div>
        </>
    );
};
export default ImagesShow;
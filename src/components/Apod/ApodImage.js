import './ApodImage.css'

const ApodImage = (props) => {
    return (
        <div className='apod-image__div'>
            {props.type==='image'? <img src={props.imgurl} className='apod-image' alt="apod"></img>:<h1>This APOD contains a video</h1>}
        </div>
    );
}

export default ApodImage;
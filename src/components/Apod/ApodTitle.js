import './ApodTitle.css'

const ApodTitle = (props) => {
    return (
        <div className='apod-title'>
            <h1 className='apod-title__title'>{props.title}</h1>
            <h1 className='apod-title__date'>{props.date}</h1>
        </div>
    );
}

export default ApodTitle
import './ApodExplaination.css'

const ApodExplaination = (props) => {
    return (
        <div className='apod-explaination'>
            <h1>
                Explanation:
            </h1>
            {props.explanation}
        </div>
    );
}

export default ApodExplaination
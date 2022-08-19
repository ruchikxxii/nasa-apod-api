import './ApodCopyright.css'

const ApodCopyright = (props) => {
    return (
        <div className='copyright'>
            <h1>
                Copyright : {props.copyright}
            </h1>
        </div>
    );
}

export default ApodCopyright
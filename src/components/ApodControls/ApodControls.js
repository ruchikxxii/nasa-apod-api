import Button from '../UI/Button';
import './ApodControls.css'
import DateSelector from './DateSelector';
import fixDateFormat from './fixDateFormat';

const ApodControls = (props) => {
    let currentDate = new Date(props.currentDate);
    let valid='true'
    let prevValid = 'true'
    if(props.currentDate===props.today){
        valid='false'
    }
    if(props.currentDate === '1995-06-16'){
        prevValid = 'false'
    }
    
    const prevDayClickHandler = () => {
        if(props.currentDate !== '1995-06-16'){
            currentDate.setDate(currentDate.getDate()-1);
            props.setDate(fixDateFormat(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`))
        }
    }
    const nextDayClickHandler = () => {
        if(props.currentDate !== props.today){
            currentDate.setDate(currentDate.getDate()+1);
            props.setDate(fixDateFormat(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`))
        }
    }

    return (
        <div className='apod-controls'>
            <Button valid={prevValid} onClick={prevDayClickHandler}>Prev Day</Button>
            <DateSelector today={props.today} setDate={props.setDate} currentDate={props.currentDate}/>
            <Button valid={valid} onClick={nextDayClickHandler}>Next Day</Button>
        </div>
    );
}

export default ApodControls
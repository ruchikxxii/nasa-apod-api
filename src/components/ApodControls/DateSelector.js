import Button from '../UI/Button';
import './DateSelector.css'
import { useState } from 'react'

const DateSelector = (props) => {
    let [fixedCurrentDate,setFixedCurrentDate] = useState(props.currentDate)
    const dateChangeHandler = (event) =>{
        setFixedCurrentDate(event.target.value)
    }
    const buttonClickHandler = () => {
        props.setDate(fixedCurrentDate);
    }

    return (
        <div className='date-selector'>
            <input type='date' value={fixedCurrentDate} onChange={dateChangeHandler} max={props.today} min='1995-06-16'/>
            <Button onClick={buttonClickHandler}>Generate APOD!</Button>
        </div>
    );
}

export default DateSelector
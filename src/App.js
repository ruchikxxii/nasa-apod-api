import './App.css';
import { useState,useEffect } from 'react'
import PageTitle from './components/PageTitle';
import Apod from './components/Apod/Apod';
import ApodControls from './components/ApodControls/ApodControls';
import fixDateFormat from './components/ApodControls/fixDateFormat';

import API_KEY from './secret.js'

function App() {
  const today = new Date();
  let fixedtoday = fixDateFormat(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`)
  const [date,setDate] = useState(fixedtoday)
  const [ApodData,setApodData] = useState({title:'loading...'})
  useEffect(()=>{
      async function fetchData() {
      const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      const apodData = await data.json()
      setApodData(apodData)
    }
    fetchData()
  },[date])

  const dateChangeHandler = (newDate) => {
    setDate(newDate);
  }
  
  return (
    <div>
      <PageTitle />
      <ApodControls currentDate={date} today={fixedtoday} setDate={dateChangeHandler}/>
      <Apod apodData={ApodData}/>
    </div>
  );
}

export default App;

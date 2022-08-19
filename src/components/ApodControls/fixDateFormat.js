const fixDateFormat = (date) => {
    let [year,month,day] = date.split('-');
    if(((parseInt(month))/10)<1){
        return `${year}-0${month}-${day}`;
    }
    return date;
}

export default fixDateFormat;
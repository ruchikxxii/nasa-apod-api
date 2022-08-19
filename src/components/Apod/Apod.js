import Card from "../UI/Card";
import ApodCopyright from "./ApodCopyright";
import ApodExplaination from "./ApodExplaination";
import ApodImage from "./ApodImage";
import ApodTitle from "./ApodTitle";

const Apod = (props) => {

    return (
        <Card>
            {props.apodData.title ? <ApodTitle title={props.apodData.title} date={props.apodData.date} /> : <ApodTitle title='Some Error Occured/Apod Does not exist' />}
            {props.apodData.title && <ApodImage imgurl={props.apodData.url} type={props.apodData.media_type}/>}
            {props.apodData.title && <ApodExplaination explanation={props.apodData.explanation} />}
            {props.apodData.title && <ApodCopyright copyright={props.apodData.copyright} />}
        </Card>
    );
}

export default Apod
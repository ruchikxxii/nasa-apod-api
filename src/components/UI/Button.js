import './Button.css'

const Button = (props) => {
    return <button className={`btn ${props.valid==='false' && 'invalid'}`} onClick={props.onClick}>{props.children}</button>
}

export default Button
import './FounderListItem.css'
/* Anything in brackets renders JavaScript */
/* props is an object saved in react, shorten everything */

const FounderListItem = (props) => { /* Props can be used to pass in data like arguements, JavaScript stuff! */
    return (
        <li>
        <h3>Hello, my name is {props.name}, the {props.title} of {props.company}</h3>
        </li>
    )
}

export default FounderListItem
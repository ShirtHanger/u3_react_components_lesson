import './FounderListItem.css'
/* Anything in brackets renders JavaScript */
/* props is an object saved in react, shorten everything */
/* You can use props without curly braces, or { parameterName } */
/* With props, you must pass in every variable with props.variable or props.object.variable */

const FounderListItem = (props) => { /* Props can be used to pass in data like arguements, JavaScript stuff! */

    const { providenceAsset } = props

    return (
        <li>
        <h3><strong>Name:</strong> {providenceAsset.name}</h3>
        <p>{providenceAsset.description}</p>
        <h4><strong>Role:</strong> {providenceAsset.title}</h4>
        <h4><strong>Cover Organization:</strong> {providenceAsset.coverCompany}</h4>
        <h4><strong>Home Base:</strong> {providenceAsset.location}</h4>
        </li>
    )
}

export default FounderListItem
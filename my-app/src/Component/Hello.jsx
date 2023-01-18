import WebPage from './webPage';

function Hello (props) {

    return (
        <div>
            <p>Hello</p>
            <p>My name is: {props.name}</p>
            <p>My height is: {props.height}</p>
            <WebPage name="green" color={props.color}/>
        </div>
    )
}

export default Hello
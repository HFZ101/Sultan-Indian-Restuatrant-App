import '../assets/styles/Menu.css'

export default function Starter(props){

    return(
        <div className="menu">
            
            <h3>{props.dish}</h3>
            <h6>{props.description}</h6>
            <h3>£{props.price}</h3>
            <button>+</button>
            <button>-</button>
        </div>
    )
}


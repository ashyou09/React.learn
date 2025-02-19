import Proptypes from 'prop-types'; // to debug it 

function Greeting(props){
        const welcomeMessage = <h className = "welcomeMessage">
            <p> Welcome to our website {props.username}!</p>
        </h>

        const  loginPrompt = <h className = "loginPrompt">
            <p> {props.username} Please login to access the website.</p>
        </h>
    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt
    )
    
}
Greeting.Proptypes = {
    isLoggedIn : Proptypes.bool,
    username : Proptypes.string,
}
Greeting.defaultprops = {
    isLoggedIn: false,
    username: "Guest",
}
export default Greeting;
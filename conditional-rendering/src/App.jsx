
//condational rendering :- allows to control whats get rendered
// in your application based on your certain conditions
// like user role, user location, user language etc.

import Greeting from './Greeting.jsx'
function App(){
  return(
    <>
    <Greeting isLoggedIn ={true}/>
    </>
  );
}

export default App;
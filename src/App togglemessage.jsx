import { useState } from 'react'; 

function ToggleMessage() { 
const [isVisible, setIsVisible] = useState(false); 

function toggleMessage(){ 
setIsVisible(!isVisible);
 } 
return ( 
<div>
<button onClick={toggleMessage}>
 {isVisible ? "Hide Message" : "Show Message"}
</button>
 {isVisible && <p>Hello! I am now visible. </p>}
</div>
);
 }
export default ToggleMessage;
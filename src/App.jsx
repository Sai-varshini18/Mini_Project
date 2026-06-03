import React,{ createContext } from "react";
import Child from "./child";
export const UserContext = createContext();
function App() {  
 
return (
    <UserContext.Provider value="Akhil">
        <Child />
    </UserContext.Provider>
);
}
   
export default App;
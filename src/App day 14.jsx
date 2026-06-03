import { useState } from 'react';
function App() {
// Declare a state variable 'count' with initial value 0
const [count, setCount] = useState(0);
function increment() {
setCount(count + 1); // Update state
}
function decrement() {
setCount(count - 1); // Decrease state
}
function reset() { setCount(0); }
return (
<div>
<h2>count: {count} </h2>
<button onClick={increment}> + Increment </button>
<button onClick={decrement}> - Decrement </button>
<button onClick={reset}> Reset</button>
</div>
);
}
 
export default App;
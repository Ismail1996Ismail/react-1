import { useState } from "react";
function App(){
  const [sum, setSum] = useState(0);
  function plus(){
    setSum(sum + 1)
  }
  function minus(){
    setSum(sum > 0 ? sum - 1 : 0)
  }
  function sbros(){
    setSum(0)
  }
  return(
    <div>
      <h2>{sum}</h2>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={sbros}>Сброс</button>
    </div>
  )
};
export default App;
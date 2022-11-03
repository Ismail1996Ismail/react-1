
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from './Main';
function App(){
    const [num, setNum] = useState(0);
    function increment(){
      setNum(num + 1)
    }
    function decrement(){
      setNum(num > 0 ? num - 1 : 0)
    }
    function reset(){
      setNum(0)
    }
    
    return(
      <div className='container'>
        <Header/>
        <Main num = {num} increment = {increment} decrement = {decrement} reset = {reset}/>
        <Footer/>
      </div>
    )
}
export default App;
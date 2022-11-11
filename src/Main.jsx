import { useState } from "react";
import Buttons from "./Buttons";
import Number from "./Number";

function Main(){
  const [num, setNum] = useState(0);
  return(
    <div className="main">
      <Number num = {num}/>
      <Buttons num = {num} setNum = {setNum}/>
    </div>
  )
}
export default Main;
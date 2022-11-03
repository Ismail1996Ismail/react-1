import Buttons from "./Buttons";
import Number from "./Number";


function Main(props){
  return(
    <div className="main">
      <Number num = {props.num}/>
      <Buttons increment = {props.increment} decrement = {props.decrement} reset = {props.reset}/>
    </div>
  )
}
export default Main;
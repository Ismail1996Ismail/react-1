import reset from './static/img/refresh 1.svg'

function Buttons(props){
  return(
    <div className="buttons">
      <button onClick = {props.increment} className='plus'>+</button>
      <button onClick = {props.reset} className='reset'><img src={reset} alt="reset"/></button>
      <button onClick = {props.decrement} className='minus'>-</button>
  </div>
  )
}
export default Buttons;
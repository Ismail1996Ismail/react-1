import reset from './static/img/refresh 1.svg'

function Buttons({num, setNum}){
  function increment(){
    setNum(num + 1)
  }
  function decrement(){
    setNum(num > 0 ? num - 1 : 0)
  }
  function reset1(){
    setNum(0)
  }
  return(
    <div className="buttons">
      <button onClick = {increment} className='plus'>+</button>
      <button onClick = {reset1} className='reset'><img src={reset} alt="reset"/></button>
      <button onClick = {decrement} className='minus'>-</button>
  </div>
  )
}
export default Buttons;
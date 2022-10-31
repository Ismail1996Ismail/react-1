function NewApp(props){
  return(
    <div>
      <h2>{props.one}</h2>
      <button onClick={props.plus}>+</button>
      <button onClick={props.minus}>-</button>
      <button onClick={props.sbros}>Сброс</button>
    </div>
  )
}
export default NewApp;
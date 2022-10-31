import React from "react";
import { useState } from "react";
import NewApp from "./NewApp";

function App(){
  const [one, setOne] = useState(1);
  function plus(){
    setOne(one + 1)
  }
  function minus(){
    setOne(one > 0 ? one - 1 : 0)
  }
  function sbros(){
    setOne(0)
  }
  return(
    <div>
      <NewApp one = {one} plus = {plus} minus = {minus} sbros = {sbros}/>
    </div>
  )
}
export default App;
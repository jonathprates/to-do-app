import { Button, TextField } from "@mui/material"
import "./style.css"
import { useState } from "react"
function App() {
  const [textTarefa,setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([])

  function mostrarvalor() {
    setListTarefa((old) =>[...old,textTarefa]);
    setTextTarefa("");
  }


  return (
    <>
    
    <form className="form-container">
      <TextField value={textTarefa} id="standard-basic" label="Tarefa"
      variant="standard" placeholder="Digite a tarefa"
      onChange={({target}) => setTextTarefa(target.value)}/>
      <Button onClick={mostrarvalor} variant="contained" >Add</Button>   
        
      <Button onClick={mostrarvalor} variant="contained" >Add</Button>           

      {console.log(listTarefa)}
    </form>
      {
        listTarefa.map((tarefa, index) => (
          <>
          
          <div key={String(index)}>{tarefa}</div>
          <div className="divider"/>
          </>
        ))
        

       }
</>
  )
}

export default App

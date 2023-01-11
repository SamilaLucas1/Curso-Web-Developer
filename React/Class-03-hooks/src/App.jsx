import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState('Samila');
  const [count, setCount] = useState(0);
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  // console.log(name);
   return (
    <div className="App">
      {/* <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
      <p>Número: {count}</p>
      <button onClick={() => setCount(count + 1)}>Contar</button> */}

      <form action="">
        {/* <p> Palavra: {text1}</p> */}
        <p> Palavra: {text2}</p>
        <input type="text" onChange={(event) => setText1(event.target.value)}/>
        <button onClick = {(event) => {event.preventDefault()
          setText2(text1)}}>Enviar</button>
      </form>
    </div>
  )
}

export default App

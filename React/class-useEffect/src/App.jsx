import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState('EmanuelQuintino')
  const [user, setUser] = useState('')

  useEffect(() => {
      fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [name]);

  function onSubmit(event) {
    event.preventDefault();
    setName(event.target.user.value);
  }
  

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" name='user'/>
        <button>Enviar</button>
      </form>
      {user && (
        <h1>{user.name}</h1>
      )}
    </div>
  )
}

export default App

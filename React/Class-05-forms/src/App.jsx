import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleSubmit (event) {
    event.preventDefault();
    // console.log(event.target.name.value)
    const name = event.target.name.value;
    const email = event.target.email.value;
    const course = event.target.course.value;
    const question = event.target.question.value;
    const term = event.target.term.value;
    const skill = event.target.skill;

    const userData = {
      name,
      email,
      course,
      question,
      term,
      skill: [...skill].map((element) => {
        return element.checked ? element.value : null;
      })
    }
    console.log(userData)
    console.log(JSON.stringify(userData)) // stringify serve para mandar os dados para o back-end
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <section>
        <label>Nome:
          <input type="text" name='name'/>
        </label>
        </section>

        <section>
        <label>E-mail:
          <input type="text" name='email'/>
        </label>
        </section>

        <section>
          <label>Curso
            <select name="course" id="">
              <option value="react">React</option>
              <option value="node">Node</option>
            </select>

            <section>
              <div>Materias que tem apetidao:</div>
              <label>
                <input type="checkbox"value='html' name='skill'/>HTML
              </label>
              <label>
                <input type="checkbox"value='css' name='skill'/>CSS
              </label>
              <label>
                <input type="checkbox"value='javascript' name='skill'/>JavaScript
              </label>
              
            </section>

            <section>
              <div>Aceita os termos de uso:</div>
              <label>
                <input type="radio"value='yes' name='term' defaultChecked />Sim
              </label>
              <label>
                <input type="radio"value='no' name='term'/>Não
              </label>
            </section>

            <section>
        <label>Por que voce quer fazer esse curso?:
          <textarea name="question" id="" cols="30" rows="2" maxLength={4}></textarea>
        </label>
        </section>

          </label>
        </section>

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App

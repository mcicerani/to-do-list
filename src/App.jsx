import { useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const todoChange = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    if (todo === '') return
    setTodos([...todos, todo])
    setTodo('')
    console.log(todos)
  }

  const todoDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  const [completed, setCompleted] = useState(Array(todos.length).fill(false));



  return (
    <>
      <div className='page__container'>

          <header>
            <h1>To Do List</h1>
          </header>

          <div className='todos-container'>

            <form>
              <input type='text' value={todo} onChange={todoChange} />
              <button type='submit' onClick={addTodo}> Add </button>
            </form>


            <ul className='todos'>

              {
                todos.map((todo, index) => (
                  <li className='todo' key={index}>
                    <input type='checkbox' checked={completed[index]} onChange={() => {
                      const newCompleted = [...completed];
                      newCompleted[index] = !newCompleted[index];
                      setCompleted(newCompleted);
                    }} />
                    <span style={{ textDecoration: completed[index] ? 'line-through' : 'none', color: completed[index] ? 'gray' : 'inherit' }}>
                      {todo}
                    </span>
                    <button onClick={() => todoDelete(index)}> Delete</button>
                  </li>
                ))
              }
              
            </ul>

          </div>

      </div>
    </>
  )
}

export default App

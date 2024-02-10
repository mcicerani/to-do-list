import { useState } from 'react'
import './App.scss'

function App() {

  const [todos, setTodos] = useState([])  // todos = ['todo1', 'todo2', 'todo3']
  const [todo, setTodo] = useState('')    // todo = 'todo'

  const todoChange = (e) => {             // e = event
    setTodo(e.target.value)               // e.target.value = input value
  }

  const addTodo = (e) => {                // e = event
    e.preventDefault()                    // prevent page refresh
    if (todo === '') return               // if todo is empty, return
    setTodos([...todos, todo])            // add todo to todos
    setTodo('')                           // clear todo
  }

  const todoDelete = (index) => {         // index = todo index  
    const newTodos = [...todos]           // copy todos
    newTodos.splice(index, 1)             // remove todo
    setTodos(newTodos)                    // set new todos
  }
  
  const [completed, setCompleted] = useState(Array(todos.length).fill(false)); // completed = [false, false, false]



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
                todos.map((todo, index) => (                                                  // map todos
                  <li className='todo' key={index}>
                    <input type='checkbox' checked={completed[index]} onChange={() => {       // checkbox
                      const newCompleted = [...completed];                                    // copy completed
                      newCompleted[index] = !newCompleted[index];                             // toggle completed
                      setCompleted(newCompleted);                                             // set new completed
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

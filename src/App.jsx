import { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [completed, setCompleted] = useState(Array(todos.length).fill(false));

  useEffect(() => {
    // Carica i dati dal localStorage al caricamento della pagina
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    
    setTodos(storedTodos);
    setCompleted(storedCompleted);
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo al montaggio

  useEffect(() => {
    // Salva i dati nel localStorage ogni volta che i todos o i completati cambiano
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [todos, completed]);

  const todoChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todo === '') return;
    setTodos([...todos, todo]);
    setCompleted([...completed, false]); // Aggiungi un valore iniziale per il completamento
    setTodo('');
  };

  const todoDelete = (index) => {
    const newTodos = [...todos];
    const newCompleted = [...completed];
    newTodos.splice(index, 1);
    newCompleted.splice(index, 1);
    setTodos(newTodos);
    setCompleted(newCompleted);
  };

  return (
    <>
      <div className='page__container'>
        <header>
          <h1>To Do List</h1>
        </header>

        <div className='todos-container'>
          <form>
            <input name='newTodo' type='text' value={todo} onChange={todoChange} />
            <button type='submit' onClick={addTodo}>
              Add
            </button>
          </form>

          <ul className='todos'>
            {todos.map((todo, index) => (
              <li className='todo' key={index}>
                <input
                  name='completed'
                  type='checkbox'
                  checked={completed[index]}
                  onChange={() => {
                    const newCompleted = [...completed];
                    newCompleted[index] = !newCompleted[index];
                    setCompleted(newCompleted);
                  }}
                />
                <span
                  style={{
                    textDecoration: completed[index] ? 'line-through' : 'none',
                    color: completed[index] ? 'gray' : 'inherit',
                  }}
                >
                  {todo}
                </span>
                <button onClick={() => todoDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

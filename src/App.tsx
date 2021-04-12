import './App.css';
import {createSignal} from "solid-js";
import {DOMElement} from "solid-js/jsx-runtime";

function App() {
  const [getTodos, setTodos] = createSignal([])

  const addTodo = (s: string) => setTodos([s, ...getTodos()])

  const handleSubmit = (e: Event & { submitter: HTMLElement } & { currentTarget: HTMLFormElement; target: DOMElement }) => {
    const target: any = e.target as HTMLInputElement
    addTodo(target.elements.todoInput.value)
    e.preventDefault()
  }

  return (
    <div class="App" id="container">
      <form id="todo-add-bar" onSubmit={handleSubmit}>
        <input type="submit">Add Todo</input>
        <input type="text"
               name="todoInput"
               placeholder="enter todo here!"
        />
      </form>
      <ul>
        {getTodos().map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;

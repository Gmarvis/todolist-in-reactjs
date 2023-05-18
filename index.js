const rootElement = document.getElementById("root");

const App = () => {
  const [newTask, setNewTask] = React.useState('');
  const [todoTast, setTodoTast] = React.useState([]); // and array to store new tast.

  // tast handlers
  function handleTast () {
    if (!newTask) {
      alert("enter task");
      return;
    }
    setTodoTast([...todoTast, newTask])
    console.log({setTodoTast});
    setNewTask("")
  }








  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name="task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task..."
      ></input>
      <button onClick={handleTast}>Add</button>
<ul>
    
    {todoTast.map((newTask)=>{
     return <li key={newTask}>{newTask} {<button>edit</button> } {<button>Delete</button>}</li>

    })}
</ul>
</div>

  );
};

ReactDOM.render(<App />, rootElement);

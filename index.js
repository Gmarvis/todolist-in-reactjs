const rootElement = document.getElementById("root");

const App = () => {
  const [newTask, setNewTask] = React.useState('');
  //localstorage is synchronous and cn sliow down the app  instead of storing new todos in an emty array, we can use a function which will only execute on render. 
  const [todoTast, setTodoTast] = React.useState(()=>{
    // get todos todotast from localstorage
    const savedTodos = localStorage.getItem("todoTast");
    if (savedTodos){
      // return the parsed JSON object back to javascript object.
      return JSON.parse(savedTodos)
    }else {
      return [];
    }
  }); // and array to store new tast. 
  // tast handlers

  // add a boolean state to know if we are editing
  //(this will display based on a condition(condition rendering))
const [isEditing, setISEdiditing] = React.useState(false)
// object state to set as to know which todo iterm we are editting
const [currentTodo, setCurrentToto] = React.useState({});


// funtion to get value of the input and set new state
function handleEditInputChange(e){
  // settting the new state value to what is currently in the input box
  setCurrentToto({...currentTodo, text: e.target.value})
  console.log(currentTodo)
}





  function handleSubmitIterms (e) {
    e.preventDefault()
    if (!newTask) {
      alert("enter task");
      return;
    }
    // set the stae of the new todos in the array todoTask 

    // 1. copy the current value of the state
    setTodoTast([ ...todoTast,
     {

    // set a id to identify each object
    id: todoTast.length + 1,
    // set a text property to the value of the todo state and trim the whitespace from the input
    text: newTask.trim()
     }
  ])
    // console.log(newTask)
    // setTodoTast([...todoTast, newTask])
    // console.log({setTodoTast});
    setNewTask("")
  }

  // create a localstorage using the useEffect hook
  // useEffect should once the component mounts.
React.useEffect(()=>{
  // localStorage only supports strings as keys a values 
  // so objects and arrays can not be stored so we use Json.stringify() to convert objects or arrays to strings.
  localStorage.setItem("todoTast", JSON.stringify(todoTast));
  // console.log(setItem)

  },[todoTast]);// we will add todoTast array bc we want to update localstorage each time the todTast changes.







  // delete todo
  const handleDeleteClick = (id)=>{
    // filtering the todoTast arrar to remove specific iterms from the todoTast array.

    const removeTodo = todoTast.filter((newTask)=>{
      return newTask.id !== id;
    })
    setTodoTast(removeTodo)
    // console.log(newTask.id)
  }

  // Edit todo handlers











  return (
    <div className="todo-Container">
      
      <form onSubmit={handleSubmitIterms}>
      <h1>Todo List</h1>
      <input
        type="text"
        name="task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task..."
      ></input>
      <button onClick={handleSubmitIterms}>Add</button>
      </form>
<ul>
  
    {todoTast.map((newTask)=>(

    <li key={newTask.id}>{newTask.text} <span>{<button onClick={()=>handleEditInputChange(newTask.id)} >edit</button>} {<button onClick={()=>handleDeleteClick(newTask.id)}>Delete</button>}</span></li>
    ))}
</ul>
</div>

  );
};

ReactDOM.render(<App />, rootElement);

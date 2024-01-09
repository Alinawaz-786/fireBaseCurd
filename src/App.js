import './App.css';
import  Todo  from './Todo';
import  AddForm  from './AddForm';

function App() {
  // const dataRef = useRef()

  // const submithandler = (e) => {
  //   e.preventDefault()
  //   handleSubmit(dataRef.current.value)
  //   dataRef.current.value = ""
  // }

  return (
    <div className="App">
      <Todo></Todo>
      <AddForm></AddForm>
      {/* <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form> */}
    </div >
  );
}

export default App;
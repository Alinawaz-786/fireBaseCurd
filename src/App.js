import './App.css';
import  Todo  from './Todo';
import  AddForm  from './AddForm';
import SendEmailComponent from "./SendEmailComponent";
// import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <AddForm></AddForm>
      <SendEmailComponent />
      {/* <Signup /> */}
      {/* <Login /> */}
    </div >
  );
}

export default App;
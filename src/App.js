import './App.css';
import UserDetails from './components/UserDetails.js';

function App() {
const users= [
  {id: 1, name:"Evandro", age: 21, job:"Dev"},
  {id: 2, name:"João", age: 17, job:"Estudante"},
  {id: 3, name:"Pedro", age: 27, job:"Dentista"},
  {id: 4, name:"Juninho", age: 10, job:"Dorminhoco"},
]

  return (
    <div className="App">

    {users.map((user)=>(
      <UserDetails key= {user.id} name= {user.name} age={user.age} job={user.job}/>
    ))}
    </div>
  );
}

export default App;
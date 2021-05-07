import React,{useState} from 'react'
import Users from './components/users'
import './App.css';

function App() {
  const [users,setUsers] = useState([])
  return (
    <div className="App">
      <Users users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;

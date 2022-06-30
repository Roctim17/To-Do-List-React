
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CompletedTasks from './Pages/CompletedTasks';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';


function App() {
  return (
    <div className='App' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/CompletedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/ToDo' element={<ToDo></ToDo>}></Route>
        <Route path='/Calendar' element={<Calendar></Calendar>}></Route>
        <Route></Route>

      </Routes>

    </div>
  );
}

export default App;

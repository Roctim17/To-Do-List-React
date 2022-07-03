
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CompletedTasks from './Pages/CompletedTasks';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';
import Login from './Component/Login/Login';
import Signup from './Component/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Component/Login/RequireAuth';


function App() {
  return (
    <div className='App' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>

        }></Route>
        <Route path='/CompletedTasks' element={
          <RequireAuth>
            <CompletedTasks></CompletedTasks>
          </RequireAuth>
        }></Route>
        <Route path='/ToDo' element={
          <RequireAuth>
            <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path='/Calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}


      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;

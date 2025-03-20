import ViewUsers from './pages/ViewUsers'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import EditUser from './pages/EditUser'
import AddUser from './pages/AddUser'
import ChangePassword from './pages/ChangePassword'
import Login from './pages/Login'
import Logout from './components/Logout'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/viewuser" element={<ViewUsers/>}/>
        <Route path="/" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/edituser/:email" element={<EditUser/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

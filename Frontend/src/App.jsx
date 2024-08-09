import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import { Home } from "./components/Home"
import {Login} from "./components/Login"
import {Signup} from "./components/Signup"
import {Service} from "./components/Service"
import {Partnersignup} from "./components/Partnersignup"

function App() {
  return (
    <>
    <Router>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/servicepartnersignup" element={<Partnersignup/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App

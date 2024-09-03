import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 

import { Home } from "./components/HomeF/Home"
import {Service} from "./components/ServiceF/Service"

import {Userlogin} from "./components/UserLoginF/Userlogin"
import {Usersignup} from "./components/UserSignupF/Usersignup"

import {Techsignup} from "./components/TechSignupF/Techsignup"
import {Techlogin} from "./components/TechLoginF/Techlogin"

import {Userdashboard} from "./components/UserDashboardF/Userdashboard"
import {Techdashboard} from "./components/TechDashboardF/Techdashboard"

function App() {
  return (
    <>
    <Router>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>

            <Route path="/userlogin" element={<Userlogin/>}/>
            <Route path="/usersignup" element={<Usersignup/>}/>

            <Route path="/techlogin" element={<Techlogin/>}/>
            <Route path="/techsignup" element={<Techsignup/>}/>

            <Route path="/userdashboard" element={<Userdashboard/>}/>
            <Route path="/techdashboard" element={<Techdashboard/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App

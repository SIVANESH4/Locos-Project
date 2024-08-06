import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import { Home } from "./components/Home"
import {Login} from "./components/Login"
import {Services} from "./components/Services"
import {ServicePartner} from "./components/ServicePartner"

function App() {
  return (
    <>
    <Router>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/service-partner" element={<ServicePartner/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App

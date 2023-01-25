import './App.css'
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import {Container} from '@chakra-ui/react'
import HomePage from './Pages/HomePage'
import MyAnouncements from './Pages/MyAnouncements'
function App() {

  return (
    <div className="App">
      <Container maxW="90vw" margin="2rem auto" >
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/MyAnouncements" element={ <MyAnouncements/> } />
      </Routes>
        </BrowserRouter>

      </Container>

    </div>
  )
}

export default App

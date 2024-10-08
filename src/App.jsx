 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import AuthPage from './pages/Authpage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
    </>
  ) 
}

export default App

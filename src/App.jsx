import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import MainPage from './pages/MainPage.jsx'
import LessonPage from './pages/LessonPage.jsx'
import PupilsPage from './pages/PupilsPage.jsx'
import PupilDetailPage from './pages/PupilDetailPage.jsx'

function App(){
  return(
    <>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/lessons" element={<LessonPage/>}/>
        <Route path="/pupils" element={<PupilsPage/>}></Route>
        <Route path="/pupils/:id" element={<PupilDetailPage/>}></Route>
      </Routes>
    </>
    
  )
}
export default App

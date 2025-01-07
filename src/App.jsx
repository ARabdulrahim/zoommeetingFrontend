import { AuthProvider } from './components/contexts/AuthContext';
import Authentication from './components/pages/Authentication';
import Landing from './components/pages/Landing'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoMeet from './components/pages/VideoMeet';
import Home from './components/pages/Home';
import CreateMeeting from './components/pages/CreateMeeting';
import History from './components/pages/History';


function App() {
 

  return (
    <BrowserRouter>
     <AuthProvider>
       <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/:url' element={<VideoMeet/>} />
        <Route path='/creteMeeting' element={<CreateMeeting/>} />
      </Routes>
      <ToastContainer/>
     </AuthProvider>
    </BrowserRouter>
  )
}

export default App

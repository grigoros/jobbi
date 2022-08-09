import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Access, Landing, Error } from './pages'
import { 
  AddJob,
  AllJobs,
  SharedLayout,
  Stats,
  Profile,
} from './pages/dashboard'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard/">
        <Route path="stats" element= {<Stats/>}/>
        <Route path="all-jobs" element= {<AllJobs/>}/>
        <Route path="add-job" element= {<AddJob/>}/>
        <Route path="profile" element= {<Profile/>}/>
      </Route> 
      <Route path="/access" element= {<Access/>}/>
      <Route path="/landing" element= {<Landing/>}/>
      <Route path="*" element= {<Error/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;

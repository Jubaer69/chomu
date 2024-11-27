import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './screens/Home.jsx'
import Cpost from './screens/Cpost.jsx'
import View from './screens/View.jsx'

const Jub = () => {
    return <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='/createpost' element={<Cpost />} />
              <Route path='/viewpost/:id' element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jub />
  </StrictMode>,
)

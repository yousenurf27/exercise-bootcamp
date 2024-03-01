import { Route, Routes } from 'react-router-dom'
import Home from './page/home'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App

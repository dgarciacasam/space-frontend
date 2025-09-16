import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { AuthScreen } from './components/auth/AuthScreen'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

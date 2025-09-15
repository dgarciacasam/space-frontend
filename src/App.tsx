import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { AuthScreen } from './components/auth/AuthScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

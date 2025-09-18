import { useNavigate } from 'react-router-dom'

export const checkEmail = (email: string | undefined): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(String(email).toLowerCase())
}

export const setGuestUser = () => {
  localStorage.setItem('guest', 'true')
  const navigate = useNavigate()
  navigate('/dashboard')
}

export const checkGuestUser = () => {
  const isGuest = localStorage.getItem('guest') === 'true'
  if (isGuest) {
    setGuestUser()
  }
  return isGuest
}

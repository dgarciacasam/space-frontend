import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const isGuest = localStorage.getItem('guest') === 'true'
  const isAuthenticated = localStorage.getItem('auth') === 'true'

  const canAccess = isGuest || isAuthenticated

  if (!canAccess) {
    return <Navigate to='/' replace />
  }

  return <>{<Outlet />}</>
}

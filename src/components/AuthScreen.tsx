import { useState } from 'react'
import { Login } from './auth/Login'
import { Register } from './auth/Register'

export const AuthScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <main className="flex flex-col h-full">
      <header className="flex w-full justify-between">
        <h1 id="title">SPACE</h1>
        <button
          className="self-center border border-gray-600 px-2 py-1 rounded-md text-sm"
          onClick={() => setIsRegistering(true)}
        >
          Sign Up
        </button>
      </header>
      {isRegistering ? <Register /> : <Login />}
    </main>
  )
}

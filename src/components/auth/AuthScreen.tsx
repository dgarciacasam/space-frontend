import { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const AuthScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <main className="flex flex-col h-full">
      <header className="flex w-full justify-between">
        <h1 id="title">SPACE</h1>
        <button
          className="self-center border border-gray-600 px-2 py-1 rounded-md text-sm hover:scale-105 transition"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Sing Up' : 'Sign In'}
        </button>
      </header>
      {isRegistering ? (
        <Register setIsRegistering={setIsRegistering} />
      ) : (
        <Login setIsRegistering={setIsRegistering} />
      )}
    </main>
  )
}

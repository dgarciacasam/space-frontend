import { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const AuthScreen = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  return (
    <main className='flex h-full flex-col'>
      <header className='flex w-full justify-between'>
        <h1 id='title'>SPACE</h1>
        <button
          className='cursor-pointer self-center rounded-md border border-gray-600 px-2 py-1 text-sm transition hover:scale-105'
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

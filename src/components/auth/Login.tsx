import { useState } from 'react'
import { AlternativeLoginButton } from './AlternativeLoginButton'
import GoogleLogo from '../icons/GoogleLogo'
import GithubLogo from '../icons/GithubLogo'
import UserLogo from '../icons/UserLogo'
import { checkEmail, setGuestUser } from '../../../utils/utils'
import type { AuthRes } from '@/types/types'

interface LoginProps {
  setIsRegistering: (value: boolean) => void
}

async function login(credentials: FormData): Promise<AuthRes> {
  const username = credentials.get('email')
  const password = credentials.get('password')

  const authReq = { username, password }

  const response = await fetch(`http://localhost:8080/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(authReq)
  })

  if (!response.ok) {
    throw new Error('Error en el login')
  }

  const data = await response.json()

  // Guardar el token en localStorage
  localStorage.setItem('token', data.token)

  return data
}

export const Login = ({ setIsRegistering }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (formData: FormData) => {
    console.log('Login called')
    const email = formData.get('email')
    const isEmailValid = checkEmail(email?.toString())
    if (!isEmailValid) {
      alert('Invalid email address')
      return
    }
    setShowPassword(true)
    login(formData)
  }

  return (
    <section className='flex flex-col items-center pt-32'>
      <article className='flex w-80 flex-col items-center gap-y-4 rounded-md'>
        <header className='w-full'>
          <h2 className='text-3xl font-bold'>Sign in to Space</h2>
          <p>Start gaining space by managing your time</p>
        </header>
        <form action={handleLogin} className='flex w-full flex-col'>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            name='email'
            className='w-full rounded-md border border-gray-600 bg-[#0A0A0A] px-4 py-3 font-light text-white transition-colors duration-200 hover:border hover:border-gray-500'
            autoComplete='email'
          />

          <div
            className={`${
              showPassword
                ? 'pointer-events-auto mt-3 max-h-24 opacity-100'
                : 'pointer-events-none mt-0 max-h-0 opacity-0'
            } transition-all duration-700 ease-out`}
            aria-hidden={!showPassword}
          >
            <input
              type='password'
              id='password'
              placeholder='Password'
              name='password'
              className='w-full rounded-md border border-gray-600 bg-[#0A0A0A] px-4 py-3 font-light text-white hover:border hover:border-gray-500'
              autoComplete='current-password'
            />
          </div>

          <button
            type='submit'
            className='mt-3 w-full cursor-pointer rounded-md bg-white px-4 py-3 font-medium text-black'
          >
            Continue with email
          </button>
        </form>
        <hr className='w-full border-t border-t-gray-600' aria-hidden='true' />
        <div className='flex w-full flex-col space-y-3'>
          <AlternativeLoginButton logo={<GoogleLogo />}>
            Continue with Google
          </AlternativeLoginButton>
          <AlternativeLoginButton logo={<GithubLogo />}>
            Continue with Github
          </AlternativeLoginButton>
        </div>
        <p className='mt-2 text-center'>
          Don't have an account?{' '}
          <a
            className='cursor-pointer text-blue-400 hover:underline hover:underline-offset-4'
            onClick={() => setIsRegistering(false)}
          >
            Sign Up
          </a>
        </p>
        <AlternativeLoginButton logo={<UserLogo />} onClick={() => setGuestUser()}>
          Continue as Guest
        </AlternativeLoginButton>
      </article>
    </section>
  )
}

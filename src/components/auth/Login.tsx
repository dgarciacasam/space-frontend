import { useState } from 'react'
import { AlternativeLoginButton } from './AlternativeLoginButton'
import GoogleLogo from '../icons/GoogleLogo'
import GithubLogo from '../icons/GithubLogo'
import { useNavigate } from 'react-router-dom'
import UserLogo from '../icons/UserLogo'
import { checkEmail } from '../../../utils/utils'

interface LoginProps {
  setIsRegistering: (value: boolean) => void
}

export const Login = ({ setIsRegistering }: LoginProps) => {
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const setGuestUser = () => {
    localStorage.setItem('guest', 'true')
    navigate('/dashboard')
  }

  return (
    <section className='flex flex-col items-center pt-32'>
      <article className='flex w-80 flex-col items-center gap-y-4 rounded-md'>
        <header className='w-full'>
          <h2 className='text-3xl font-bold'>Sign in to Space</h2>
          <p>Start gaining space by managing your time</p>
        </header>
        <form action='' className='flex w-full flex-col'>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            className='w-full rounded-md border border-gray-600 bg-[#0A0A0A] px-4 py-3 font-light text-white transition-colors duration-200 hover:border hover:border-gray-500'
            autoComplete='email'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && checkEmail(email)) setShowPassword(true)
            }}
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
              className='w-full rounded-md border border-gray-600 bg-[#0A0A0A] px-4 py-3 font-light text-white hover:border hover:border-gray-500'
              autoComplete='current-password'
            />
          </div>

          <button
            type='button'
            onClick={() => setShowPassword(true)}
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

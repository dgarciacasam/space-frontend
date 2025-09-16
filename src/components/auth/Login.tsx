import { useState } from 'react'
import { AlternativeLoginButton } from './AlternativeLoginButton'
import GoogleLogo from '../icons/GoogleLogo'
import GithubLogo from '../icons/GithubLogo'
import { useNavigate } from 'react-router-dom'
import { UserLogo } from '../icons/UserLogo'
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
      <article className='flex flex-col items-center gap-y-4 rounded-md w-80'>
        <header className='w-full'>
          <h2 className='text-3xl font-bold'>Sign in to Space</h2>
          <p>Start gaining space by managing your time</p>
        </header>
        <form action='' className='flex flex-col w-full'>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            className='bg-[#0A0A0A] text-white w-full border border-gray-600 px-4 py-3 rounded-md font-light
             hover:border hover:border-gray-500 transition-colors duration-200'
            autoComplete='email'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && checkEmail(email)) setShowPassword(true)
            }}
          />

          <div
            className={`${
              showPassword
                ? 'max-h-24 opacity-100 mt-3 pointer-events-auto'
                : 'max-h-0 opacity-0 mt-0 pointer-events-none'
            }  transition-all duration-700 ease-out`}
            aria-hidden={!showPassword}
          >
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='bg-[#0A0A0A] text-white w-full border border-gray-600 px-4 py-3 rounded-md font-light hover:border hover:border-gray-500'
              autoComplete='current-password'
            />
          </div>

          <button
            type='button'
            onClick={() => setShowPassword(true)}
            className='bg-white text-black font-medium w-full px-4 py-3 rounded-md mt-3'
          >
            Continue with email
          </button>
        </form>
        <hr className='border-t border-t-gray-600 w-full' aria-hidden='true' />
        <div className='flex flex-col space-y-3 w-full'>
          <AlternativeLoginButton logo={<GoogleLogo />}>
            Continue with Google
          </AlternativeLoginButton>
          <AlternativeLoginButton logo={<GithubLogo />}>
            Continue with Github
          </AlternativeLoginButton>
        </div>
        <p className='text-center mt-2'>
          Don't have an account?{' '}
          <a
            className='text-blue-400 cursor-pointer hover:underline hover:underline-offset-4'
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

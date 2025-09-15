import { useState } from 'react'
import { AlternativeLoginButton } from './AlternativeLoginButton'
import GoogleLogo from '../icons/GoogleLogo'
import GithubLogo from '../icons/GithubLogo'
import { Arrow } from '../icons/Arrow'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  setIsRegistering: (value: boolean) => void
}

export const Login = ({ setIsRegistering }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const setGuestUser = () => {
    localStorage.setItem('guest', 'true')
    navigate('/dashboard')
  }

  return (
    <section className="flex flex-col items-center pt-32">
      <article className="flex flex-col items-center space-y-4 rounded-md w-80">
        <header>
          <h2 className="text-3xl font-bold">Sign in to Space</h2>
          <p>Start gaining space by managing your time</p>
        </header>
        <form action="" className="flex flex-col space-y-3 w-full">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="bg-[#0A0A0A] text-white w-full border border-gray-600 px-4 py-3 rounded-md font-light"
            autoComplete="email"
          />
          <div
            className={`${
              showPassword ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0'
            } transition-all duration-700 ease-out overflow-hidden`}
            aria-hidden={!showPassword}
          >
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-[#0A0A0A] text-white w-full border border-gray-600 px-4 py-3 rounded-md font-light"
              autoComplete="current-password"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(true)}
            className="bg-white text-black font-medium w-full px-4 py-3 rounded-md"
          >
            Continue with email
          </button>
        </form>
        <hr className="border-t border-t-gray-600 w-full" aria-hidden="true" />
        <div className="flex flex-col space-y-3 w-full">
          <AlternativeLoginButton logo={<GoogleLogo />}>
            Continue with Google
          </AlternativeLoginButton>
          <AlternativeLoginButton logo={<GithubLogo />}>
            Continue with Github
          </AlternativeLoginButton>
        </div>
        <p className="text-center mt-2">
          Don't have an account?{' '}
          <a
            className="text-blue-400 cursor-pointer hover:underline hover:underline-offset-4"
            onClick={() => setIsRegistering(false)}
          >
            Sign Up
          </a>
        </p>
        <button
          type="button"
          onClick={() => setIsRegistering(true)}
          className="flex justify-center items-center gap-2 font-semibold w-full px-4 py-3 rounded-md text-center bg-[#0A0A0A] text-white border border-gray-600 hover:bg-neutral-900 transition-colors duration-200"
        >
          <Arrow />
          Continue as Guest
        </button>
      </article>
    </section>
  )
}

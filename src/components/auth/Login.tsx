import { AlternativeLoginButton } from './AlternativeLoginButton'
import GoogleLogo from '../GoogleLogo'
import GithubLogo from '../GithubLogo'

export const Login = () => {
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
          <button
            type="button"
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
      </article>
    </section>
  )
}

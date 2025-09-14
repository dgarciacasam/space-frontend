interface AlternativeLoginButtonProps {
  children: React.ReactNode
  logo: React.ReactNode
  onClick?: () => void
}

export const AlternativeLoginButton = ({
  children,
  logo,
  onClick
}: AlternativeLoginButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 font-semibold w-full px-4 py-3 rounded-md text-center bg-[#0A0A0A] text-white border border-gray-600"
    >
      {logo}
      {children}
    </button>
  )
}

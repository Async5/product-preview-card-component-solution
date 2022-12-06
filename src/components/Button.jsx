const Button = ({ text, icon }) => {
  return (
    <button className="flex items-center justify-center w-full bg-primary-darkCyan hover:bg-primary-veryDarkCyan transition-all text-white text-sm py-4 rounded-md">
      {icon && <img className="mr-2" src={icon} alt="icon" />}
      {text}
    </button>
  )
}

export default Button

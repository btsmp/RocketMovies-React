import { Link } from "react-router-dom"

export function TextButton(props) {
  const { to, title, icon: Icon, } = props
  return (
    <Link
      to={to}
      className="mt-9 text-[#FF859B] text-center hover:font-semibold duration-200 cursor-pointer flex items-center gap-1"
    >
      {Icon && <Icon size={15} />} {title}
    </Link>
  )
}
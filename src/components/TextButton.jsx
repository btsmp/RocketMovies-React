export function TextButton(props) {
  const { link, title, icon: Icon } = props
  return (
    <a
      href={link}
      className="mt-9 text-[#FF859B] text-center hover:font-semibold duration-200 cursor-pointer flex items-center gap-1"
    >
      {Icon && <Icon size={15} />} {title}
    </a>
  )
}
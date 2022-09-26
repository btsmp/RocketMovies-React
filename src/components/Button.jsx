export function Button(props) {
  const { title, icon: Icon } = props
  return (
    <button className="
    text-center bg-[#FF859B] rounded-lg hover:brightness-75 duration-75 w-full h-full flex items-center justify-center gap-2"
    >
      {Icon && <Icon size={18} />}{title}
    </button>
  )
}
interface ButtonProps {
  title: string
  icon?: any
}

export function Button(props: ButtonProps) {
  const { title, icon: Icon } = props
  return (
    <button className="
    text-center bg-[#FF859B] rounded-lg mt-4 hover:brightness-75 duration-75 w-full h-full flex items-center justify-center gap-2"
    >
      {Icon && <Icon size={18} />}{title}
    </button>
  )
}
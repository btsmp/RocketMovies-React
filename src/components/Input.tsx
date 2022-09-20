interface InputProps {
  placeholder: string
  icon?: any
  type: string
}

export function Input(props: InputProps) {
  const { placeholder, icon: Icon, type } = props
  return (
    <div className="flex items-center justify-center text-[#948F99] bg-[#262529] rounded-lg p-4 w-full gap-2">
      {Icon && <Icon size={18} />}
      <input className="bg-transparent w-full" type={type} placeholder={placeholder} />
    </div>
  )
}
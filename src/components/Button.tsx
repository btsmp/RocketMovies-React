interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  const { title } = props
  return (
    <button className="bg-[#FF859B] rounded-lg p-4 mt-4 hover:brightness-75">{title}</button>
  )
}
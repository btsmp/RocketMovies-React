interface TitleFormProps {
  title: string
}

export function TitleForm(props: TitleFormProps) {
  const { title } = props
  return (
    <h1 className="font-medium text-[#F4EDE8] text-xl my-8">{title}</h1>
  )
}
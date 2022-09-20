interface TextButtonProps {
  title: string
  link?: string

}

export function TextButton(props: TextButtonProps) {
  const { link, title } = props
  return (
    <a href={link} className="mt-9 text-[#FF859B] text-center hover:font-semibold" >{title}</a>
  )
}
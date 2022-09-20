interface TagsProps {
  title: string
}

export function Tags(props: TagsProps) {
  const { title } = props
  return (
    <div className="text-[#E5E5E5] py-1 px-3 bg-[#312E38] rounded-lg font-normal text-xs">
      {title}
    </div>
  )
}
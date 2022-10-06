
import { Stars } from "./Stars"
import { Tag } from "./Tag"
import { TitleMovie } from "./TitleMovie"

export function CardMovie({ data }) {
  return (
    <div className="bg-[#272024] rounded-2xl p-8 flex flex-col gap-4 ">

      <TitleMovie title={data.title} />
      <Stars rating={data.rating} />

      <div>
        <p className="text-[#999591] text-ellipsis overflow-hidden h-full">
          {data.description}
        </p>
      </div>
      <div className="flex gap-2">
        {data.tags &&
          data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />

          ))}
      </div>
    </div>
  )
}
import { TitleMovie } from "./TitleMovie";
import { Stars } from "./Stars";
import { Tag } from "./Tag";

export function CardMovie({ data, ...rest }) {
  return (
    <div {...rest} className="bg-[#272024] rounded-2xl p-8 flex gap-4 cursor-pointer items-center">
      {
        data.banner ?
          <div>
            <div className="h-40 w-24 rounded-sm overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w200${ data.banner }`} className="h-full w-auto" />
            </div>
          </div> : <></>
      }

      <div className=" flex flex-col gap-4">
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

    </div>
  )
}
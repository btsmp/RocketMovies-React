import star from "../assets/star.svg"
import starFull from "../assets/star-full.svg"
export function Stars(props) {
  const { ratingUser } = props

  const ratingMax = 5
  const startsUnfilleds = ratingMax - ratingUser
  console.log(startsUnfilleds)


  return (
    <div className="flex gap-1 ">
      <img src={starFull} />
      <img src={starFull} />
      <img src={starFull} />
      <img src={starFull} />
      <img src={starFull} />
      <img src={star} />
    </div>
  )
}
import starFull from "../assets/star-full.svg";
import star from "../assets/star.svg";

export function Stars({ rating }) {

  return (
    <div className="flex gap-1 ">
      {rating >= 1 ? <img src={starFull} /> : <img src={star} />}
      {rating >= 2 ? <img src={starFull} /> : <img src={star} />}
      {rating >= 3 ? <img src={starFull} /> : <img src={star} />}
      {rating >= 4 ? <img src={starFull} /> : <img src={star} />}
      {rating >= 5 ? <img src={starFull} /> : <img src={star} />}

    </div>
  )
}

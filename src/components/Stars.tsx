import { Star } from "./star"

type TypeStars = {
  count: number,
}

export const Stars = ({count}: TypeStars) => {
  
  { if (count < 1 || count > 5) return <></> }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({length: count}).map(() => <Star />)}
    </ul>
  )
}

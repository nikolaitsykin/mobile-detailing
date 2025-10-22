import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as G } from "../assets/icons/g.svg";

const ReviewItem = ({ name, content, rating }) => {
  function truncateString(str, maxLength = 260) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  }
  const bgColor = getRandomColor();

  return (
    <div className="h-[230px] w-[250px] flex flex-col items-center text-sm sm:text-base mr-5 py-1">
      <div className="w-[210px] flex items-start flex-col">
        <div className="w-full flex justify-between">
          <div className="flex">
            <span
              className={`p-1 h-8 w-8 rounded-full text-white flex items-center justify-center`}
              style={{ backgroundColor: bgColor }}
            >
              {name[0]}
            </span>
            <p className="text-sm font-medium pl-1">{name}</p>
          </div>
          <div className="flex items-center">
            <G className="w-8 h-8"/>
          </div>
        </div>
        <div>
          <span className="flex items-start my-2">
            {Array.from({ length: rating }, (_, index) => (
              <Star key={index} className="w-3 h-3" />
            ))}
          </span>
        </div>
      </div>
      <p className="h-full w-full text-xs md:text-sm">
        {truncateString(content)}
      </p>
    </div>
  );
};

export default ReviewItem;

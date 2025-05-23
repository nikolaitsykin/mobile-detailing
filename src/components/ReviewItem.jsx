import { ReactComponent as Star } from "../assets/icons/star.svg";

const ReviewItem = ({ name, content, rating }) => {
  function truncateString(str, maxLength = 85) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }
  return (
    <div className="h-full flex flex-col items-center text-sm sm:text-base px-2 py-1 border border-gray rounded-md">
      <div className="w-[220px] flex items-center">
        <p className="text-xs font-medium">{name}</p>
        <span className="flex items-start p-1">
          {Array.from({ length: rating }, (_, index) => (
            <Star key={index} className="w-3 h-3" />
          ))}
        </span>
      </div>
      <p className="h-full w-full text-xs md:text-xs">{truncateString(content)}</p>
    </div>
  );
};

export default ReviewItem;

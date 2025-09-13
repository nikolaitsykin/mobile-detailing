const TestimonalItem = ({ item }) => {
  function truncateString(str, maxLength = 450) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  return (
    <div className="h-auto w-full mx-auto relative font-poppins px-2">
      <div className="cursor-pointer">
        <div>
          <img
            loading="lazy"
            src={item.image}
            alt={"Car detailing"}
            className=" object-cover w-48 h-48 mx-auto px-0.5 rounded-full"
          />
          <div className="flex flex-col text-xs md:text-sm">
            <span className="font-semibold">{item.name}</span>
            <span>"{truncateString(item.review)}"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalItem;

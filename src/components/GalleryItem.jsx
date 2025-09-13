
const GalleryItem = ({ item }) => {
  return (
    <div className="h-auto w-full mx-auto relative font-poppins">
      <div className="cursor-pointer">
        <img
          loading="lazy"
          src={item}
          alt={"Car detailing"}
          className="object-cover h-auto px-0.5"
        />
      </div>
    </div>
  );
};

export default GalleryItem;

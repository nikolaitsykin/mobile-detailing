
const GalleryItem = ({ item }) => {
  return (
    <div className="h-96 relative font-poppins">
      <div className="cursor-pointer">
        <img
          loading="lazy"
          src={item}
          alt={"Car detailing"}
          className="object-cover h-auto md:h-96 px-0.5"
        />
      </div>
    </div>
  );
};

export default GalleryItem;

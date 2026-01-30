const AdBox = ({ image }) => (
  <div className="sticky top-4">
    <img src={image} className="rounded-md mb-4" />
    <button className="bg-pink-600 text-white w-full py-2 rounded">
      Learn More
    </button>
  </div>
);

export default AdBox;

import img from "../../../assets/unsplash_19szVauJ7KA.png";
import img1 from "../../../assets/unsplash__7AFTBn2jO4.png";
import img2 from "../../../assets/unsplash_kZOGdVyB_hM.png";
import img3 from "../../../assets/unsplash_trPI4zXpaQU.png";
import img4 from "../../../assets/unsplash_u3gTIoJLmpg.png";
import img5 from "../../../assets/unsplash_YxlZv4sG4Eg.png";
const Locations = () => {
  return (
    <div className="container mx-auto text-black my-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-16">
        Choose your location
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center my-5 md:px-10">
        <div>
          <h1 className="text-2xl font-bold text-center">Shoreditch</h1>
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">City of London</h1>
          <img className="mx-auto" src={img1} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">The West End</h1>
          <img className="mx-auto" src={img2} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Kensington</h1>
          <img className="mx-auto" src={img3} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Kingston</h1>
          <img className="mx-auto" src={img4} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Hammersmith</h1>
          <img className="mx-auto" src={img5} alt="" />
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn text-white bg-[#064749] rounded-full hover:text-black">
          View all spaces
        </button>
      </div>
    </div>
  );
};

export default Locations;

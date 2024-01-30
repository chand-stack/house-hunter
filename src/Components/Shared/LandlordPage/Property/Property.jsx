import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { TbNumber24Small } from "react-icons/tb";
const Property = () => {
  return (
    <div>
      <div className=" container mx-auto text-black mt-36">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Better than Property Management
        </h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated <br /> booking manager that can help to find
          properties for your needs.
        </p>
      </div>
      <div className="container mx-auto px-2 md:px-10 text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        <div className="px-10 py-8 space-y-4 bg-[#F2F0F2]  rounded-2xl">
          <FaLock className="text-6xl" />
          <h1 className="text-2xl font-bold">Guaranteed Rent</h1>
          <p>We do the searching for you</p>
        </div>
        <div className="px-10 py-8 space-y-4 bg-[#F2F0F2] rounded-2xl">
          <FaTag className="text-6xl" />
          <h1 className="text-2xl font-bold">No Fees</h1>
          <p>Preferred partner rates</p>
        </div>
        <div className="px-10 py-8 space-y-4 bg-[#F2F0F2] rounded-2xl">
          <BsFillBuildingsFill className="text-6xl" />
          <h1 className="text-2xl font-bold">No Voids</h1>
          <p>Preferred partner rates</p>
        </div>
        <div className="px-10 py-8 space-y-4 bg-[#F2F0F2] rounded-2xl">
          <TbNumber24Small className="text-6xl text-white bg-black rounded-full" />
          <h1 className="text-2xl font-bold">24/7 Maintenance</h1>
          <p>Extend on short notice</p>
        </div>
      </div>
    </div>
  );
};

export default Property;

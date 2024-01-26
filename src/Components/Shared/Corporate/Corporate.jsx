import { CiSearch } from "react-icons/ci";
import { HiUser } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
const Corporate = () => {
  return (
    <div>
      <div className=" container mx-auto mt-10 text-black">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Corporate Partnerships
        </h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated booking manager that can help to find properties for
          your needs
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#E2F1E8] text-black p-10 rounded-2xl">
          <CiSearch className="text-6xl" />
          <h1 className="text-2xl font-bold">Booking manager</h1>
          <p>We do the searching for you</p>
        </div>
        <div className="bg-[#E2F1E8] text-black p-10 rounded-2xl">
          <HiUser className="text-6xl" />
          <h1 className="text-2xl font-bold">Account manager</h1>
          <p>Preferred partner rates</p>
        </div>
        <div className="bg-[#E2F1E8] text-black p-10 rounded-2xl">
          <FaFileAlt className="text-6xl" />
          <h1 className="text-2xl font-bold">Flexible terms</h1>
          <p>Extend on short notice</p>
        </div>
      </div>
    </div>
  );
};

export default Corporate;

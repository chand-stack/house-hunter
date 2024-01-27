import { FaCalendarAlt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
const Services = () => {
  return (
    <>
      <div className=" container mx-auto mt-10 text-black">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          HouseHunter Services
        </h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          Explore the seamless services of HouseHunter, where finding your dream
          home or listing your property is made effortless. Our platform
          connects renters and property owners for a stress-free and streamlined
          rental experience
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 px-4 md:px-10">
        <div className="bg-[#E2F1E8] text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <FaCalendarAlt className="text-6xl" />
          <h1 className="text-2xl font-bold">Flexible living</h1>
          <p>
            Stay as Long or as little as you need with month-to- month contracts
          </p>
        </div>
        <div className="bg-[#E2F1E8] text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <GiSofa className="text-6xl" />
          <h1 className="text-2xl font-bold">Move-in ready</h1>
          <p>Ready to move in with everything you need</p>
        </div>
        <div className="bg-[#E2F1E8] text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <FaWifi className="text-6xl" />
          <h1 className="text-2xl font-bold">High-speed Wi-Fi</h1>
          <p>Best in class internet speeds suitable for working from home</p>
        </div>
        <div className="bg-[#E2F1E8] text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <IoChatbubbleEllipses className="text-6xl" />
          <h1 className="text-2xl font-bold">24/7 support</h1>
          <p>On hand team for any issues you have</p>
        </div>
      </div>
    </>
  );
};

export default Services;

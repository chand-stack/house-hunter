import img1 from "../../../../assets/beforebedroom.png";
import img2 from "../../../../assets/afterbedroom.png";
import { RiBookFill } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdLocalHotel } from "react-icons/md";
import { MdOutlineMoveUp } from "react-icons/md";
const CorporateLandlord = () => {
  return (
    <div className="my-16">
      <div className=" container mx-auto text-black mt-36">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          Corporate Partnerships
        </h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated <br /> booking manager that can help to find
          properties for your needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-14">
        <div className="relative">
          <img className="mx-auto w-full" src={img1} alt="" />
          <div className="bg-[#E2F1E8] py-3 px-10 w-44 rounded-xl absolute right-0 bottom-0 ">
            <h1 className="text-xl lg:text-4xl text-black font-bold">Before</h1>
          </div>
        </div>
        <div className="relative">
          <img className="mx-auto w-full" src={img2} alt="" />
          <div className="bg-[#E2F1E8] py-3 px-10 w-44 rounded-xl absolute right-0 bottom-0  ">
            <h1 className="text-xl lg:text-4xl text-black font-bold">After</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 px-4 md:px-10">
        <div className="text-center text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <RiBookFill className="text-6xl mx-auto" />
          <h1 className="text-2xl font-bold">Discover Homes</h1>
          <p>
            Effortlessly find your ideal rental with our curated listings,
            tailored to your lifestyle.
          </p>
        </div>
        <div className="text-center text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <LiaCertificateSolid className="text-6xl mx-auto" />
          <h1 className="text-2xl font-bold">Easy Booking</h1>
          <p>
            Streamlined and stress-free, our platform ensures a smooth journey
            from selection to securing your dream home.
          </p>
        </div>
        <div className="text-center text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <MdLocalHotel className="text-6xl mx-auto" />
          <h1 className="text-2xl font-bold">Personal Assistance</h1>
          <p>
            Get dedicated support from our experts for any questions or
            assistance you need throughout the process.
          </p>
        </div>
        <div className="text-center text-black p-5 md:p-9 space-y-3 rounded-3xl">
          <MdOutlineMoveUp className="text-6xl mx-auto" />
          <h1 className="text-2xl font-bold">Post-Move Care</h1>
          <p>
            Our commitment extends beyond move-in day, offering ongoing support
            and resources for your comfort in your new home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateLandlord;

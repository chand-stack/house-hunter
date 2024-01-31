import img1 from "../../../../assets/beforebedroom.png";
import img2 from "../../../../assets/afterbedroom.png";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
    </div>
  );
};

export default CorporateLandlord;

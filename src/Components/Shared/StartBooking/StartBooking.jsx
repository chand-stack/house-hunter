import bg from "../../../assets/upto.png";
const StartBooking = () => {
  return (
    <div>
      <div
        className="h-52 md:h-96 lg:h-[500px] w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-black flex justify-center items-center">
          <div className="container mx-auto space-y-5 md:space-y-9 px-5">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Bespoke spaces
            </h1>
            <p className="text-white md:font-medium md:text-lg ">
              Expertly designed to create extraordinary spaces with the flexible
              renter in mind
            </p>
            <div className="">
              <button className="btn text-white bg-[#064749] rounded-full hover:text-black border-none">
                Start booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBooking;

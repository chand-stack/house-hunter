import img1 from "../../../assets/partner1.svg";
import img2 from "../../../assets/partner2.svg";
const Review = () => {
  return (
    <div>
      <div className=" container mx-auto text-black mt-36">
        <h1 className="text-center text-3xl md:text-5xl font-bold">
          What Our Partners Think
        </h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          See What Our Partners Say About US
        </p>
      </div>
      <div className="md:px-10 mx-auto mt-6 mb-7 container">
        <div className="carousel bg-white carousel-center w-full  p-4 space-x-4 rounded-box">
          <div
            //   key={item?._id}
            className="carousel-item w-4/5 md:w-3/5 hover:bg-[#F2F0F2] hover:duration-500 rounded-xl shadow-xl p-5 flex flex-col justify-center transform transition-transform hover:scale-105"
          >
            <h1 className="p-2 font-semibold flex-grow">
              <i>
                HouseHunter has been an invaluable partner for us. Their
                platform is intuitive, and the team is dedicated to ensuring a
                smooth rental process. It&lsquo;s a pleasure working with them
              </i>
            </h1>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img className="rounded-full" src={img1} alt="user" />
              <h1 className="text-2xl font-bold">Green Realty Group</h1>
            </div>
          </div>
          <div
            //   key={item?._id}
            className="carousel-item w-4/5 md:w-3/5 hover:bg-[#F2F0F2] hover:duration-500 rounded-xl shadow-xl p-5 flex flex-col justify-center transform transition-transform hover:scale-105"
          >
            <h1 className="p-2 font-semibold flex-grow">
              <i>
                HouseHunter has transformed the way we connect with potential
                renters. Their innovative platform and personalized service have
                significantly improved our property listings&lsquo; visibility.
              </i>
            </h1>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img className="rounded-full" src={img2} alt="user" />
              <h1 className="text-2xl font-bold">Urban Oasis Properties</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

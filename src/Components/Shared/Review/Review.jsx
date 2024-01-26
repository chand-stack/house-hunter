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
      <div className="lg:w-9/12 mx-auto mt-6 mb-7 container">
        <div className="carousel bg-white carousel-center w-full  p-4 space-x-4 rounded-box">
          <div
            //   key={item?._id}
            className="carousel-item w-4/5 md:w-3/5 hover:bg-[#34cceb] hover:text-white hover:duration-500 rounded-xl shadow-xl p-5 flex flex-col justify-center transform transition-transform hover:scale-105"
          >
            <h1 className="p-2 font-semibold flex-grow">
              <i> ppppp</i>
            </h1>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img className="h-28 w-32 rounded-full" src="" alt="user" />
              <h1 className="text-2xl font-bold">name</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

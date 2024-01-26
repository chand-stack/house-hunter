import bnimg from "./../../../assets/ImageBanner.png";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bnimg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={bnimg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 md:p-14 text-black">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Your Dream Home Awaits
            </h1>
            <p className="font-semibold">
              Discover simplicity in house hunting with HouseHunter! Browse,
              book, and move into your dream home effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

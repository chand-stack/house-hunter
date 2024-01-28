import bnimg from "../../../assets/adBanner.png";
const Addbanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bnimg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 md:p-14 text-black space-y-2">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Discover Your Ideal Locale
            </h1>
            <p className="font-semibold">
              Explore and choose your perfect location with ease. Our
              interactive map lets you pinpoint the neighborhoods that resonate
              with you, ensuring your dream home is situated in the ideal
              setting. Begin your journey towards the perfect location for your
              next chapter.
            </p>
            <div>
              <select className="select select-bordered w-full max-w-xs bg-[#064749] text-white font-medium">
                <option disabled selected>
                  Choose City
                </option>
                <option>Hammersmith</option>
                <option>Kingston-Upon-Thames</option>
                <option>Kensington</option>
                <option>The West End</option>
                <option>City of London</option>
                <option>Shoreditch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addbanner;

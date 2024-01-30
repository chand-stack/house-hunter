import bnimg from "../../../assets/landlordBanner.png";
const LandlordBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bnimg})` }}
      >
        <div className="hero-content justify-end container mx-auto">
          <div className="card shrink-0 w-4/5 lg:w-1/2 shadow-2xl bg-base-100 bg-opacity-65 p-5 md:p-10 text-black space-y-3">
            <h1 className="text-3xl md:text-5xl font-semibold text-center">
              Earn more from your property, do less
            </h1>
            <p className="font-semibold text-center">
              Find out if your property meets our criteria
            </p>
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name *"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email *"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Property details</span>
                </label>
                <div className="flex gap-2 mb-2">
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      City *
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Area *
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <select className="select select-bordered w-full ">
                  <option disabled selected>
                    # of bedrooms *
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="text-center mt-6">
                <button className="btn text-white text-lg font-bold px-10 bg-[#064749] rounded-full hover:text-black border-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordBanner;

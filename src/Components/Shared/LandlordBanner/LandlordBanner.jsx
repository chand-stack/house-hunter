import bnimg from "../../../assets/landlordBanner.png";
const LandlordBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bnimg})` }}
      >
        <div className="hero-content justify-end container mx-auto">
          <div className="card shrink-0 w-4/5 lg:w-1/2 shadow-2xl bg-base-100 p-5 md:p-10 text-black space-y-3">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Earn more from your property, do less
            </h1>
            <p className="font-semibold">
              Find out if your property meets our criteria
            </p>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordBanner;

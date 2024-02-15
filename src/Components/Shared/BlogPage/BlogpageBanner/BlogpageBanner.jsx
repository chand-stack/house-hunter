import bnimg from "../../../../assets/blogbanner.png";
import NewsTabs from "../NewsTabs/NewsTabs";
const BlogpageBanner = () => {
  return (
    <div>
      <NewsTabs />
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bnimg})` }}
      >
        <div className="">
          <div className="card max-w-sm shadow-2xl bg-base-100 p-5 md:p-10 space-y-3 text-black">
            <h1 className="text-3xl md:text-5xl font-semibold">
              We rent your property
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

export default BlogpageBanner;

import { MdWatchLater } from "react-icons/md";
const NewsList = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 text-black">
        <div className="card w-96 rounded-box bg-base-200 border mx-auto">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-bold">
              Turpis elit in dictum eget eget
            </h2>
            <p>Convallis eu vel fames feugiat et venenatis nulla ipsum.</p>
            <div className="flex items-center gap-3">
              <MdWatchLater className="text-2xl" />
              <p className="text-2xl font-bold">1 min read</p>
            </div>
          </div>
        </div>
        <div className="card w-96 rounded-box bg-base-200 border mx-auto">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-bold">
              Turpis elit in dictum eget eget
            </h2>
            <p>Convallis eu vel fames feugiat et venenatis nulla ipsum.</p>
            <div className="flex items-center gap-3">
              <MdWatchLater className="text-2xl" />
              <p className="text-2xl font-bold">1 min read</p>
            </div>
          </div>
        </div>
        <div className="card w-96 rounded-box bg-base-200 border mx-auto">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-bold">
              Turpis elit in dictum eget eget
            </h2>
            <p>Convallis eu vel fames feugiat et venenatis nulla ipsum.</p>
            <div className="flex items-center gap-3">
              <MdWatchLater className="text-2xl" />
              <p className="text-2xl font-bold">1 min read</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn text-white bg-[#064749] rounded-full hover:text-black border-none">
          Load More
        </button>
      </div>
    </div>
  );
};

export default NewsList;

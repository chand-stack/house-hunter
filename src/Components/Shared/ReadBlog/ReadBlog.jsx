import { MdWatchLater } from "react-icons/md";
const ReadBlog = () => {
  return (
    <div className="container mx-auto text-black my-24">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        Read our blog
      </h1>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box my-10">
        <div className="carousel-item">
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
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn text-white bg-[#064749] rounded-full hover:text-black border-none">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ReadBlog;

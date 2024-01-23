import img from "../../../assets/image 13.png";
import img1 from "../../../assets/image 14.png";
import img2 from "../../../assets/image 15.png";
import img3 from "../../../assets/Rectangle 225.png";
const Future = () => {
  return (
    <div className="container mx-auto grid grid-flow-col-dense md:grid-cols-2 items-center gap-4 my-10">
      <div className="mx-auto">
        <div className="md:flex">
          <img className="mx-auto" src={img3} alt="" />
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <img className="mx-auto" src={img1} alt="" />
          <img className="mx-auto" src={img2} alt="" />
        </div>
      </div>
      <div className="bg-base-300 p-5 md:p-10 rounded-3xl md:mx-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          The future is flexible
        </h1>
        <p className="font-semibold">
          We believe in a world where finding a home is just a click away.
          Whether you’re selling your home, travelling for work or moving to a
          new city. Just bring your bags, and we’ll handle the rest.
        </p>
      </div>
    </div>
  );
};

export default Future;

import { TiTick } from "react-icons/ti";
const Pricing = () => {
  return (
    <div>
      <div className=" container mx-auto text-black mt-36">
        <h1 className="text-center text-3xl md:text-5xl font-bold">Pricing</h1>
        <p className="w-3/4 mx-auto text-center my-3 font-medium">
          Compare our pricing model to high street agents
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 container mx-auto px-4 md:px-10 lg:px-20 mt-14 mb-28">
        <div className="col-span-2 border rounded-2xl drop-shadow-md">
          <div className="bg-[#E2F1E8] text-center text-black py-10 px-20 rounded-t-2xl">
            <h1 className="text-2xl  font-semibold">High Street Agents</h1>
            <p className="font-semibold text-6xl">12%</p>
            <p className="text-xl font-medium">Management fee</p>
          </div>
          <div className="space-y-4 pl-10 pt-10 pb-20 drop-shadow-md">
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />6 to 12 months
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              No maintenance
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              No weekly cleaning
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              No interior design
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              5% void
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              £24,900
            </p>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <h1 className="font-medium text-3xl text-black">Vs</h1>
        </div>
        <div className="col-span-2 border rounded-2xl">
          <div className="bg-[#E2F1E8] text-center text-black py-10 px-20 rounded-t-2xl drop-shadow-md">
            <h1 className="text-2xl  font-semibold">
              Flex Living (guaranteed Rental)
            </h1>
            <p className="font-semibold text-6xl">Fixed Price</p>
            <p className="text-xl font-medium">monthly</p>
          </div>
          <div className="space-y-4 pl-10 pt-10 pb-20 drop-shadow-md">
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />3 to 5 years
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              Free maintenance
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              Weekly cleaning
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              Interior design
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              No void
            </p>
            <p className="flex gap-3 items-center text-lg text-black">
              <TiTick />
              £30,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

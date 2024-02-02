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
      <div>
        <div>
          <div className="bg-[#E2F1E8] text-center text-black py-10 px-20">
            <h1 className="text-3xl md:text-5xl font-bold">
              High Street Agents
            </h1>
            <p className="font-semibold">12%</p>
            <p className="text-xl font-medium">Management fee</p>
          </div>
          <div>
            <p>
              <TiTick />6 to 12 months
            </p>
            <p>
              <TiTick />
              No maintenance
            </p>
            <p>
              <TiTick />
              No weekly cleaning
            </p>
            <p>
              <TiTick />
              No interior design
            </p>
            <p>
              <TiTick />
              5% void
            </p>
            <p>
              <TiTick />
              £24,900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

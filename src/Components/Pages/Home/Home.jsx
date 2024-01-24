import Banner from "../../Shared/Banner/Banner";
import Future from "../../Shared/Future/Future";
import Locations from "../../Shared/Locations/Locations";
import Services from "../../Shared/Services/Services";
import StartBooking from "../../Shared/StartBooking/StartBooking";

const Home = () => {
  return (
    <div>
      <Banner />
      <Future />
      <Services />
      <Locations />
      <StartBooking />
    </div>
  );
};

export default Home;

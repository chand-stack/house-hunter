import Banner from "../../Shared/Banner/Banner";
import Corporate from "../../Shared/Corporate/Corporate";
import Footer from "../../Shared/Footer/Footer";
import Future from "../../Shared/Future/Future";
import Locations from "../../Shared/Locations/Locations";
import Review from "../../Shared/Review/Review";
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
      <Corporate />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;

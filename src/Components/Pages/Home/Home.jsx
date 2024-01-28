import Addbanner from "../../Shared/Addbanner/Addbanner";
import Banner from "../../Shared/Banner/Banner";
import Corporate from "../../Shared/Corporate/Corporate";
import Future from "../../Shared/Future/Future";
import Locations from "../../Shared/Locations/Locations";
import ReadBlog from "../../Shared/ReadBlog/ReadBlog";
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
      <ReadBlog />
      <Addbanner />
    </div>
  );
};

export default Home;

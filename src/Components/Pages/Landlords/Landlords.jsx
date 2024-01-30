import LandlordBanner from "../../Shared/LandlordBanner/LandlordBanner";
import HowWorks from "../../Shared/LandlordPage/HowWorks/HowWorks";
import Property from "../../Shared/LandlordPage/Property/Property";

const Landlords = () => {
  return (
    <div>
      <LandlordBanner />
      <Property />
      <HowWorks />
    </div>
  );
};

export default Landlords;

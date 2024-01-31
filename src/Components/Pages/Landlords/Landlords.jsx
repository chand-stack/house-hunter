import LandlordBanner from "../../Shared/LandlordBanner/LandlordBanner";
import CorporateLandlord from "../../Shared/LandlordPage/CorporateLandlord/CorporateLandlord";
import HowWorks from "../../Shared/LandlordPage/HowWorks/HowWorks";
import Property from "../../Shared/LandlordPage/Property/Property";

const Landlords = () => {
  return (
    <div>
      <LandlordBanner />
      <Property />
      <HowWorks />
      <CorporateLandlord />
    </div>
  );
};

export default Landlords;

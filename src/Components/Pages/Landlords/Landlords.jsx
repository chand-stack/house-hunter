import LandlordBanner from "../../Shared/LandlordBanner/LandlordBanner";
import CorporateLandlord from "../../Shared/LandlordPage/CorporateLandlord/CorporateLandlord";
import HowWorks from "../../Shared/LandlordPage/HowWorks/HowWorks";
import Pricing from "../../Shared/LandlordPage/Pricing/Pricing";
import Property from "../../Shared/LandlordPage/Property/Property";

const Landlords = () => {
  return (
    <div>
      <LandlordBanner />
      <Property />
      <HowWorks />
      <CorporateLandlord />
      <Pricing />
    </div>
  );
};

export default Landlords;

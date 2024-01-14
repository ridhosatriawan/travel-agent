import Airbnb from "../assets/icons/Airbnb";
import AmericaAirlines from "../assets/icons/AmericaAirlines";
import Expedia from "../assets/icons/Expedia";
import Skycanner from "../assets/icons/Skycanner";
import Traveloka from "../assets/icons/Traveloka";

const TravelPartner = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="h-[160px] w-[1440px] px-[120px] flex justify-between items-center">
        <h3 className="text-2xl text-brand-gray">Our Travel Partner</h3>
        <div className="flex gap-8 items-center">
          <Traveloka />
          <Airbnb />
          <Expedia />
          <Skycanner />
          <AmericaAirlines />
        </div>
      </div>
    </div>
  );
};

export default TravelPartner;

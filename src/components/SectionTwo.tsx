import Boat from "@/assets/images/boat.jpeg";
import StarIcon from "@/assets/icons/Star";
import HeavenResort from "@/assets/images/heaven-resort.jpeg";
import Person4 from "@/assets/images/person-4.png";

const SectionTwo = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] h-[730px] flex justify-between py-[60px]">
        <div className="w-[560px] relative">
          <img src={Boat} alt="Boat" className="rounded-xl aspect-square" />
          <div className="p-3 flex gap-4 w-[324px] h-[79px] absolute z-10 bg-white rounded-lg -right-10 top-[50px] shadow-brand">
            <img src={HeavenResort} alt="" className="aspect-square" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Heaven Resort</span>
                <div className="flex items-center">
                  <StarIcon />
                  <span>(4.5)</span>
                </div>
              </div>
              <div className="text-brand-gray">
                Starts from <span className="text-brand-blue">$</span>
                <span className="text-brand-black">400</span>
              </div>
            </div>
          </div>
          <div className="p-3 flex gap-4 w-[240px] h-[72px] absolute z-10 bg-white rounded-full -left-10 bottom-[150px] shadow-brand items-center">
            <div className="w-12">
              <img
                src={Person4}
                alt=""
                className="rounded-full aspect-square"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg">Jake Anderson</span>
              <p className="text-brand-gray">Best Tour Guide</p>
            </div>
          </div>
        </div>
        <div className="w-[560px] flex items-center">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-[40px]  text-brand-black font-medium tracking-wide leading-tight">
              With Our Service We Will Explore Something Different
            </h1>
            <p className="text-brand-gray tracking-normal text-lg">
              Uncover hidden gems and immerse yourself in vibrant cultures. From
              breathtaking landscapes to awe-inspiring destinations, let us
              guide you to the most extraordinary places on the planet.
            </p>
            <button className="mt-4 bg-brand-blue text-white px-6 py-3 rounded-md">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

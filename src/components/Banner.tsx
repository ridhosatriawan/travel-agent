import StarIcon from "../assets/icons/Star";
import VectorBanner from "../assets/icons/VectorBanner";
import BannerImage from "../assets/images/Subtract.png";
import BannerImageCard from "../assets/images/card-header-image.png";
import BottomBannerImage from "../assets/images/bottom-banner.png";
import MapIcon from "../assets/icons/Map";
import SearchIcon from "../assets/icons/Search";
import CalendarIcon from "../assets/icons/Calendar";
import FacebookIcon from "../assets/icons/Facebook";
import InstagramIcon from "../assets/icons/Instagram";
import TwitterIcon from "../assets/icons/Twitter";
import MouseImage from "@/assets/icons/Mouse";

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] h-[760px] grid grid-cols-2 gap-[80px] py-[60px]">
        <div className="mt-8 flex flex-col">
          <div className="relative">
            <h1 className="text-brand-black text-7xl font-bold">
              Discover your favorite place with us
            </h1>
            <VectorBanner className="absolute -bottom-2 -z-10" />
          </div>
          <p className="mt-6 text-lg text-brand-gray">
            Your journey begins here with our curated travel experiences.
            Discover new horizons, create lasting memories, and explore the
            world with our expertly crafted itineraries.
          </p>
          <div className="border rounded-2xl border-brand-gray h-[72px] w-[560px] px-4 py-3 mt-10 flex items-center gap-4">
            <div className="flex gap-3 flex-1">
              <MapIcon />
              <div className="flex flex-col gap-2">
                <div className="font-medium" style={{ lineHeight: "normal" }}>
                  Locations
                </div>
                <div className="text-sm text-brand-gray">
                  e.g Bali, Indonesia
                </div>
              </div>
            </div>
            <div className="border-l border-brand-gray h-6"></div>
            <div className="flex gap-3 flex-1">
              <CalendarIcon />
              <div className="flex flex-col gap-2">
                <div className="font-medium" style={{ lineHeight: "normal" }}>
                  Date and time
                </div>
                <div className="text-sm text-brand-gray">MM/DD/YYYY</div>
              </div>
            </div>
            <div className="p-3 rounded-[10px] bg-brand-blue flex items-center justify-center">
              <SearchIcon />
            </div>
          </div>

          <div className="mt-auto flex gap-4 items-center">
            <div className="font-medium text-brand-gray">Follow Us</div>
            <div className="rounded-full p-2 bg-brand-smoke">
              <FacebookIcon />
            </div>
            <div className="rounded-full p-2 bg-brand-smoke">
              <InstagramIcon />
            </div>
            <div className="rounded-full p-2 bg-brand-smoke">
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative">
          <div className="p-3 flex gap-4 w-[324px] h-[79px] absolute z-10 bg-white rounded-lg left-10 top-[90px] shadow-brand">
            <img src={BannerImageCard} alt="" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Coco De Heaven</span>
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
          <img src={BannerImage} />
          <div className="absolute bottom-5 right-4">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <MouseImage />
              </div>
              <img src={BottomBannerImage} className=" animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

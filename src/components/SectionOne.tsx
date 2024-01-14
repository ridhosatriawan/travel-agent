import Beach from "@/assets/images/beach.jpeg";
import Paris from "@/assets/images/paris.jpeg";
import Person1 from "@/assets/images/person-1.png";
import Person2 from "@/assets/images/person-2.png";
import Person3 from "@/assets/images/person-3.png";
import Vatikan from "@/assets/images/vatikan.jpeg";
import { cn } from "@/lib/utils";

const persons = [Person1, Person2, Person3];
const SectionOne = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1200px] h-[730px] flex justify-between py-[60px]">
        <div className="flex flex-col gap-8 w-[520px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px]  text-brand-black font-medium tracking-wide leading-tight">
              Embark On Unforgettable Journeys With Our Premium Travel Services
            </h1>
            <p className="text-brand-gray tracking-normal text-lg">
              Picture-perfect getaways are just a click away. Find your slice of
              paradise, whether it's a tropical island, a charming city, or an
              enchanting countryside retreat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <div className="flex gap-2 items-center">
                <div className="bg-brand-blue w-6 h-6 flex items-center justify-center rounded-full text-white">
                  1
                </div>
                <h5 className="text-lg font-medium text-brand-black mb-1 ">
                  Best Choice
                </h5>
              </div>
              <p className="text-brand-gray ml-8">
                We always prioritize our customer comfort and satisfaction.
                That’s why we only accept the best hotel and destination
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="bg-brand-blue w-6 h-6 flex items-center justify-center rounded-full text-white">
                  2
                </div>
                <h5 className="text-lg font-medium text-brand-black mb-1 ">
                  Competitive Prices
                </h5>
              </div>
              <p className="text-brand-gray ml-8">
                Altough the price tends to be cheaper but it will not affect the
                quality of service
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <div className="bg-brand-blue w-6 h-6 flex items-center justify-center rounded-full text-white">
                  3
                </div>
                <h5 className="text-lg font-medium text-brand-black mb-1 ">
                  Refund and Reschedule
                </h5>
              </div>
              <p className="text-brand-gray ml-8">
                Don’t worry if suddenly you have problem and want to reschule or
                refund, you can get fully.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[560px] gap-6 relative">
          <div className="absolute w-[400px] h-[400px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E6F5FE] -z-10"></div>
          <div className="col-span-2 h-[320px] w-full">
            <img
              src={Beach}
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
          <div className="h-full w-full">
            <img
              src={Paris}
              className="rounded-2xl object-cover h-full w-full aspect-square"
            />
          </div>
          <div className="h-full w-full">
            <img
              src={Vatikan}
              className="rounded-2xl object-cover h-full w-full aspect-square"
            />
          </div>
          <div className="w-[224px] h-[110px] bg-white shadow-brand rounded-xl absolute top-10 -left-14 p-3 flex flex-col gap-4 ">
            <div className="flex relative">
              {persons.map((person, index) => (
                <div
                  key={index}
                  style={{ left: index * 30 }}
                  className={cn("w-12 h-12 ", index > 0 && "absolute")}
                >
                  <img
                    src={person}
                    className="object-cover h-full w-full aspect-square rounded-full border-2 border-white"
                  />
                </div>
              ))}
            </div>
            <div className="text-brand-black text-lg font-medium tracking-tight flex items-center gap-2">
              <span className="text-brand-blue">10K+</span>
              <span>Satisfied Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;

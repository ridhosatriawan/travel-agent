import Venice from "@/assets/images/venice.png";
import Bali from "@/assets/images/bali.jpeg";
import Bangkok from "@/assets/images/bangkok.jpeg";
import Maldives from "@/assets/images/maldives.jpeg";
import Santorini from "@/assets/images/sentunin.jpeg";
import Dubai from "@/assets/images/dubai.jpeg";

import { useCallback, useState } from "react";
import Arrow from "./Arrow";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import StarIcon from "@/assets/icons/Star";

const destinations = [
  {
    id: "1",
    title: "Venice, Italy",
    price: "900",
    rating: "4.5",
    image: Venice,
  },
  {
    id: "2",
    title: "Bali, Indonesia",
    price: "600",
    rating: "4.9",
    image: Bali,
  },
  {
    id: "3",
    title: "Bangkok, Thailand",
    price: "300",
    rating: "4.6",
    image: Bangkok,
  },
  {
    id: "4",
    title: "Santorini, Greek",
    price: "1000",
    rating: "4.5",
    image: Santorini,
  },
  {
    id: "5",
    title: "Maldives",
    price: "900",
    rating: "4.5",
    image: Maldives,
  },
  {
    id: "6",
    title: "Dubai, UEA",
    price: "1200",
    rating: "4.5",
    image: Dubai,
  },
];

const PopularDestintion = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev(false);
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext(false);
  }, [api]);

  return (
    <div className="w-full flex items-center justify-center h-[620px] py-[60px] flex-col gap-9 ">
      <div className="flex justify-center items-center">
        <div className="px-[120px] w-[1440px] flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl text-brand-black font-medium">
              Popular Destinations
            </h3>
            <span className="text-lg text-brand-gray">
              See our popular destinations that our client choose
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="w-12 h-12 items-center justify-center flex border border-brand-gray rounded-full"
              onClick={scrollPrev}
            >
              <Arrow />
            </button>
            <button
              className="w-12 h-12 items-center justify-center flex border bg-brand-blue rounded-full rotate-180"
              onClick={scrollNext}
            >
              <Arrow fill="#fff" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full pl-[120px] pr-2 2xl:pl-[240px]"
        >
          <CarouselContent className="-ml-8">
            {destinations.map((destination) => (
              <CarouselItem
                key={destination.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4  2xl:basis-1/5 pl-8"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full rounded-xl ">
                    <img
                      src={destination.image}
                      alt="venice"
                      className="w-full rounded-xl object-cover aspect-square"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-brand-black text-xl">
                        {destination.title}
                      </h4>
                      <div className="flex items-center gap-1 text-brand-black text-sm">
                        <StarIcon />
                        <span>({destination.rating})</span>
                      </div>
                    </div>
                    <div className="text-brand-gray">
                      Starts from <span className="text-brand-blue">$</span>
                      <span className="text-brand-black">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularDestintion;

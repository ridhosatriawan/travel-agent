import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import StarIcon from "@/assets/icons/Star";
import Person4 from "@/assets/images/person-4.png";

const VerticalCarousel = ({
  delay = 2000,
  align = "start",
}: {
  delay?: number;
  align?: "start" | "center" | "end";
}) => {
  return (
    <Carousel
      opts={{
        align,
        loop: true,
      }}
      plugins={[Autoplay({ delay })]}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[900px] w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 mb-4 mx-4">
            <div className="flex flex-col gap-6 shadow-testimonial h-full w-full p-6 rounded-lg">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="text-brand-gray">
                "I had a seamless booking process with this travel website.
                Their website was easy to navigate, and I got fantastic deals on
                flights and accommodation. Will definitely use them for future
                trips."
              </p>
              <div className="flex gap-4">
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const Testimonial = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1264px] grid grid-cols-3">
        <VerticalCarousel delay={3000} align="center" />
        <VerticalCarousel delay={5000} align="end" />
        <VerticalCarousel delay={4000} align="start" />
      </div>
    </div>
  );
};

export default Testimonial;

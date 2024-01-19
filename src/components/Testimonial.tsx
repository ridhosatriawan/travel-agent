import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import StarIcon from "@/assets/icons/Star";
import Person4 from "@/assets/images/person-4.png";
import Person5 from "@/assets/images/person-5.png";
import Person6 from "@/assets/images/person-6.png";
import Person7 from "@/assets/images/person-7.png";
import Person8 from "@/assets/images/person-8.png";

const listTestimony = [
  {
    id: 1,
    img: Person4,
    name: "Hendra Paru Paru",
  },
  {
    id: 2,
    img: Person5,
    name: "Nichole Edward",
  },
  {
    id: 3,
    img: Person6,
    name: "Jonathan R.",
  },
  {
    id: 4,
    img: Person7,
    name: "Akbar Cenglu",
  },
  {
    id: 5,
    img: Person8,
    name: "Akbar Cenglu",
  },
];

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
        {listTestimony.map((testimoni) => (
          <CarouselItem key={testimoni.id} className="md:basis-1/3 mb-4 mx-4">
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
                    src={testimoni.img}
                    alt=""
                    className="rounded-full aspect-square"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold text-lg">{testimoni.name}</span>
                  <p className="text-brand-gray">Travel Enthusiast</p>
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

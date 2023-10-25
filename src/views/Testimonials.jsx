import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Testimonial } from "../components";

const testimonialDummyData = [
  {
    name: "Sarah J.",
    comment:
      "Exceptional service! VistaVroom made my car rental experience seamless and stress-free. From choosing the car to hitting the road, it was all so easy. The vehicle was clean, well-maintained, and perfect for my family trip. I'll definitely be using VistaVroom again",
  },
  {
    name: "David M.",
    comment:
      "VistaVroom is my go-to choice for car rentals. The website is intuitive, the selection of cars is fantastic, and the prices are unbeatable. Their customer support is top-notch too. I’ve recommended VistaVroom to all my friends – they never disappoint!",
  },
  {
    name: "Emily R.",
    comment:
      "I recently rented a 4x4 for a rugged outdoor adventure, and VistaVroom delivered beyond my expectations. The vehicle was robust, reliable, and handled rough terrains effortlessly. Booking was a breeze, and their team ensured I had a memorable off-road experience. Highly recommended!",
  },
  {
    name: "Michael L.",
    comment:
      "VistaVroom understands the needs of business travelers. I rented a comfortable sedan for a weeklong business trip, and the entire process was efficient. Quick booking, professional service, and a well-maintained vehicle – everything I needed for a successful trip. Thank you, VistaVroom!",
  },
];
const Testimonials = () => {
  return (
    <div className="mt-36 py-24 bg-gray-100">
      <div className="wrapper flex justify-center items-center">
        <Carousel
          className="rounded-xl pb-12 max-w-[860px]"
          prevArrow={() => null}
          nextArrow={() => null}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                    activeIndex === i ? "bg-primary-green" : "bg-accent-green"
                  }`}
                />
              ))}
            </div>
          )}
        >
          {testimonialDummyData.map((data, index) => (
            <React.Fragment key={index}>
              <Testimonial name={data.name} comment={data.comment} />
            </React.Fragment>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

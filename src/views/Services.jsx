import paymentIcon from "../assets/payment-icon.svg";
import bookmarkIcon from "../assets/bookmark-icon.svg";
import userIcon from "../assets/user-icon.svg";
import chatIcon from "../assets/chat-icon.svg";

import { ServiceCard } from "../components";
import useNav from "../components/hooks/useNav";

const Services = () => {
  const servicesRef = useNav("Services");
  return (
    <div ref={servicesRef} id="servicesSection" className="bg-white mt-36">
      <div className="py-28 bg-lightest-gray">
        <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-6 lg:gap-12 mb-9">
          <h1 className="head_text flex-1 text-center lg:text-start">
            See <span className="green_text">best services</span> for your
            solution
          </h1>
          <p className="text-subtitle-gray flex-1 text-center">
            Discover an array of top-notch services tailored to meet your unique
            needs. Whether it's our budget-friendly Essential Plan or the
            all-inclusive Pro Plan, you'll find the perfect solution to make
            your car rental experience exceptional. We've got your journey
            covered.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="mt-5 xs:-mt-[110px] flex flex-col lg:flex-row items-center lg:items-center gap-5">
          <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
            <ServiceCard
              iconSrc={paymentIcon}
              title="Secure payment"
              description="Experience peace of mind with our secure payment system. Your transactions are protected, ensuring a worry-free booking process."
            />
            <ServiceCard
              iconSrc={bookmarkIcon}
              title="Any class vehicle"
              description="Choose from our diverse fleet, offering vehicles for every need. From compact cars to spacious SUVs, find the perfect ride for your journey."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 self-auto lg:self-stretch">
            <ServiceCard
              iconSrc={userIcon}
              title="Car Sharing Options"
              description="Unlock the benefits of car sharing. Share rides, split costs, and reduce your carbon footprint. It's a sustainable and economical way to travel."
            />
            <ServiceCard
              iconSrc={chatIcon}
              title="Help Center & Support"
              description="Count on our dedicated help center and expert support. Our team is here 24/7 to assist you, ensuring a smooth and enjoyable rental experience."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

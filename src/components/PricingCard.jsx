import carImg from "../assets/pricing-card-car.svg";

import PrimaryButton from "./PrimaryButton";

const essentialPlanOptions = [
  "100 Miles/Day",
  "Basic Insurance",
  "Roadside Assistance",
  "Additional Driver (Extra cost)",
];

const recommendedPlanOptions = [
  " Unlimited Miles",
  "Comprehensive Insurance",
  "Roadside Assistance",
  "GPS Navigation",
  "Additional Driver(Free)",
];

const proPlanOptions = [
  " Unlimited Miles",
  "Premium Coverage Insurance",
  "Roadside Assistance",
  "GPS Navigation",
  "Additional Driver(Free)",
  "Child Safety Seats (Up to 2 seats)",
];

const PricingCard = ({ special, headText, plan }) => {
  const currentPlanOptions =
    plan === "recommended"
      ? recommendedPlanOptions
      : plan === "pro"
      ? proPlanOptions
      : essentialPlanOptions;
  return (
    <div
      className={`h-[557px] flex-initial sm:flex-1 w-full sm:w-fit max-w-[312px] border border-secondary-gray py-8 px-5 rounded-[10px] ${
        special ? "bg-secondary-green" : "bg-white"
      } flex flex-col relative`}
    >
      {special ? (
        <h2 className="text-primary-black font-kalam font-bold text-4xl mb-2 tracking-wider">
          {headText}
        </h2>
      ) : (
        <div className="mb-[30px]">
          <p
            className={`${
              plan === "recommended"
                ? "text-primary-green"
                : "text-primary-black"
            } font-bold uppercase text-center mb-[6px] tracking-wider`}
          >
            {plan}
          </p>
          <h2 className="text-primary-black font-kalam font-bold text-4xl text-center tracking">
            {headText}
          </h2>
        </div>
      )}
      {special ? (
        <p className="text-light-gray">Choose our best plan to save a lot.</p>
      ) : (
        <div className="flex flex-col gap-2 items-center">
          {currentPlanOptions.map((option, index) => (
            <p key={index} className="text-light-gray">
              &#10003; {option}
            </p>
          ))}
        </div>
      )}
      {plan ? (
        <PrimaryButton black={plan !== "recommended"} className="mt-auto">
          Choose plan
        </PrimaryButton>
      ) : (
        <img src={carImg} alt="car" className="absolute right-0 bottom-12" />
      )}
    </div>
  );
};

export default PricingCard;

import rentingProcessDiagram from "../assets/process.svg";
import rentingProcessDiagramMobile from "../assets/process-vertical.svg";

import { Step } from "../components";

const steps = [
  {
    title: "Choose a vehicle",
    description: "Select your ideal car from our diverse range.",
  },
  {
    title: "Pick location & date",
    description: "Specify pickup location and rental dates.",
  },
  {
    title: "Book your car",
    description: "Confirm your reservation quickly and easily.",
  },
  {
    title: "Finish process",
    description: "Provide details and payment. Hit the road!",
  },
];

const RentingProcess = () => {
  return (
    <div className="pt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          Our renting <span className="green_text">process</span>
        </h1>
        <div className="flex md:flex-col justify-center md:justify-start gap-8">
          <img
            src={rentingProcessDiagram}
            alt="rentingProcessDesktop"
            className="hidden md:block"
          />
          <img
            src={rentingProcessDiagramMobile}
            alt="rentingProcessMobile"
            className="block md:hidden"
          />
          <div className="flex flex-col md:flex-row gap-5">
            {steps.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentingProcess;

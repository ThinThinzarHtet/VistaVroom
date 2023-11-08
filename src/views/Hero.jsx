import heroPatternRight from "../assets/hero-pattern-right.svg";
import heroPatternLeft from "../assets/hero-pattern-left.svg";
import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";

import { LabelInput, PrimaryButton } from "../components";
import useNav from "../components/hooks/useNav";

const options = [
  { value: "BMW X3", label: "BMW X3" },
  { value: "BMW M2", label: "BMW M2" },
  { value: "Tesla", label: "Tesla" },
  { value: "Ferrari", label: "Ferrari" },
  { value: "Sports car", label: "Sports car" },
];

const Hero = () => {
  const homeRef = useNav("Home");

  return (
    <div ref={homeRef} id="homeSection" className="bg-white">
      <div className="bg-lightest-gray relative">
        <div className="wrapper min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">rental car</span>
          </h1>
          <h4 className="text-subtitle-gray text-center font-raleway text-xl pb-11">
            You choose. We deliver
          </h4>
        </div>
        <img
          src={heroPatternRight}
          alt="heroRight"
          className="hidden md:block absolute right-0 bottom-0"
        />
        <img
          src={heroPatternLeft}
          alt="heroLeft"
          className="hidden md:block absolute left-0 bottom-0"
        />
      </div>
      <div className="wrapper">
        <div className="relative bg-white px-10 sm:px-[76px] py-9 sm:py-[70px] mt-5 sm:-mt-[166px] xs:-mt-[100px] min-h-[330px] shadow-lg rounded-xl flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5">
            <LabelInput
              label="Vehicle Type"
              placeholder="Select Car Group"
              icon={busIcon}
              type="select"
              options={options}
            />

            <LabelInput
              label="Picking Up Location"
              placeholder="Airport or anywhere"
              icon={locationIcon}
            />
            <LabelInput
              label="Picking Up Date"
              placeholder="10/24/2023"
              icon={calendarIcon}
              type="date"
            />
            <LabelInput
              label="Returning Date"
              placeholder="11/24/2023"
              icon={calendarIcon}
              type="date"
            />
          </div>
          <PrimaryButton
            className="w-full lg:w-2/3 mx-0 lg:mx-auto"
            small={false}
          >
            Find your car
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;

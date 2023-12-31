import { useState } from "react";

import { PricingCard } from "../components";
import useNav from "../components/hooks/useNav";

const Pricing = () => {
  const [switchVal, setSwitchVal] = useState(false);
  const pricingRef = useNav("Pricing");
  return (
    <div ref={pricingRef} id="pricingSection" className="mt-36">
      <div className="wrapper">
        <h1 className="head_text text-center">
          See our <span className="green_text">pricing plan</span>
        </h1>
        <div className="py-9 flex items-center justify-center gap-7">
          <p
            className={`font-bold ${
              switchVal ? "text-primary-black" : "text-primary-green"
            } transition-all duration-300 ease-in`}
          >
            Monthly
          </p>
          {/* toggle button */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              value={switchVal}
              onChange={() => setSwitchVal((prev) => !prev)}
            />
            <div
              className="w-11 h-6 bg-gray-200 rounded-full peer
            dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
           after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
           after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-green"
            ></div>
          </label>
          <p
            className={`font-bold ${
              !switchVal ? "text-primary-black" : "text-primary-green"
            } transition-all duration-300 ease-in`}
          >
            Yearly
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-5">
          <div className="flex flex-col sm:flex-row gap-5 flex-initial xl:flex-1 w-full justify-start sm:justify-center items-center sm:items-start">
            <PricingCard special headText="Save By Choosing Our Best Plan" />
            <PricingCard
              plan="essential"
              headText={`$${switchVal ? "349.99" : "29.50"}`}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 flex-initial xl:flex-1 w-full justify-start sm:justify-center items-center sm:items-start">
            <PricingCard
              plan="recommended"
              headText={`$${switchVal ? "529.99" : "44.50"}`}
            />
            <PricingCard
              plan="pro"
              headText={`$${switchVal ? "845.99" : "70.50"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

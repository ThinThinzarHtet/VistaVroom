import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// export function CustomInput({ value, onClick }) {
//   return (
//     <div className="input-group">
//       <input
//         type="text"
//         className="form-control"
//         value={value}
//         onClick={onClick}
//         readOnly
//       />
//       <div className="input-group-append">
//         <span className="input-group-text">
//           <FaCalendarAlt />
//         </span>
//       </div>
//     </div>
//   );
// }

const LabelInput = ({ label, placeholder, icon, type = "", options }) => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = ({ value, onClick }) => (
    <>
      <div className="input-group">
        <input
          type="text"
          // className="form-control"
          className="form-control text-dark-gray placeholder-subtitle-gray w-full h-full border rounded-[4px] border-accent-gray py-4 sm:py-[22px] pl-4 sm:pl[22px] pr-9 sm:pr-11 focus:ring-primary-green focus:border-primary-green"
          value={value}
          onClick={onClick}
          readOnly
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <img
              src={icon}
              alt={icon}
              className="absolute right-3 sm:right-[22px] top-1/2 -translate-y-1/2"
            />
          </span>
        </div>
      </div>
    </>
  );
  return (
    <div className="flex flex-col gap-2.5 w-full lg:w-2/3 mx-0 lg:mx-auto xl:w-[272px] max-w-full">
      <label htmlFor={label} className="text-dark-gray">
        {label}
      </label>
      {type === "select" ? (
        <>
          <Select
            placeholder={placeholder}
            options={options}
            components={{
              DropdownIndicator: () => (
                <>
                  <img
                    src={icon}
                    alt={icon}
                    className="absolute right-3 sm:right-[22px] top-1/2 -translate-y-1/2"
                  />
                </>
              ),
              IndicatorSeparator: () => null,
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: "4px",
              colors: {
                ...theme.colors,
                primary50: "#94CA21",
                primary: "#94CA21",
                primary25: "#94CA21",
              },
            })}
            classNames={{
              control: () => "border-2 border-primary-green py-3",
            }}
            styles={{
              input: (base) => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
            }}
          />
        </>
      ) : type === "date" ? (
        <>
          <DatePicker
            selected={startDate}
            className="text-dark-gray placeholder-subtitle-gray w-full h-full border rounded-[4px] border-accent-gray py-4 sm:py-[22px] pl-4 sm:pl[22px] pr-9 sm:pr-11 focus:ring-primary-green focus:border-primary-green"
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput />}
          />
        </>
      ) : (
        <div className="relative h-16 rounded-[4px]">
          <input
            type="text"
            id={label}
            placeholder={placeholder}
            className="absolute bottom-0 left-0 text-dark-gray placeholder-subtitle-gray w-full h-full border rounded-[4px] border-accent-gray py-4 sm:py-[22px] pl-4 sm:pl[22px] pr-9 sm:pr-11 focus:ring-primary-green focus:border-primary-green"
          />
          <img
            src={icon}
            alt={icon}
            className="absolute right-3 sm:right-[22px] top-1/2 -translate-y-1/2"
          />
        </div>
      )}
    </div>
  );
};

export default LabelInput;

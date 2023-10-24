import PrimaryButton from "./PrimaryButton";

const descItems = ["Sports", "Auto", "4 Passengers", "Diesel"];
const CarCard = ({ carName, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt={imageSrc} className="mx-auto" />
      <div className="px-5">
        <h3 className="text-dark-gray text-[27px] font-bold mb-[18px] mt-6 text-center md:text-start">
          {carName}
        </h3>

        <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
          {descItems.map((item, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <div className="h-[5px] w-[5px] bg-accent-gray rounded-full" />
              <p className="text-dark-gray">{item}</p>
            </div>
          ))}
        </div>
        <div className="my-7 h-[1px] bg-accent-gray w-full" />
        <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-center gap-4">
          <h2 className="font-kalam font-bold text-4xl text-primary-black">
            $369{" "}
            <span className="font-raleway text-dark-gray text-xl font-normal">
              /Day
            </span>
          </h2>
          <PrimaryButton className="w-full xl:w-fit">Rent now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

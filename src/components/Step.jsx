const Step = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2.5 w-fit md:w-[310px] h-[165px] md:h-fit">
      <p className="text-dark-gray font-bold uppercase tracking-wider">
        {title}
      </p>
      <p className="text-light-gray">{description}</p>
    </div>
  );
};

export default Step;

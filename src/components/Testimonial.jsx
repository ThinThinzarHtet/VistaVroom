import quoteIcon from "../assets/quote-icon.svg";

const Testimonial = ({ name, comment }) => {
  return (
    <div>
      <img src={quoteIcon} alt="quoteIcon" className="mx-auto" />
      <h3 className="text-black text-3xl text-center tracking-wider">
        {comment}
      </h3>
      <p className="text-dark-gray font-bold text-center uppercase mt-[30px]">
        {name}
      </p>
    </div>
  );
};

export default Testimonial;

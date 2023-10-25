import contactPattern from "../assets/contact-pattern.svg";

import { PrimaryButton } from "../components";

const Contact = () => {
  return (
    <div className="mt-36 py-28 bg-lightest-gray relative">
      <div className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between gap-6 lg:gap-12">
        <h1 className="head_text flex-1 text-center lg:text-start">
          Let's begin with <br />
          <span className="green_text">vistavroom rental.</span>
        </h1>
        <div className="flex flex-col gap-[26px] flex-1">
          <p className="text-light-gray text-center lg:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, ipsa unde minima obcaecati dolor neque. Alias
            necessitatibus cupiditate consectetur unde! Aliquid iusto molestiae
            cumque laboriosam voluptatibus error corporis maxime veniam.
          </p>
          <PrimaryButton className="mx-auto lg:mx-0 w-full sm:w-fit">
            Contact Us
          </PrimaryButton>
        </div>
      </div>
      <img
        src={contactPattern}
        alt="contactPattern"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Contact;

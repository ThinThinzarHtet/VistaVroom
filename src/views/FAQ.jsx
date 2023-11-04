import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import useNav from "../components/hooks/useNav";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const faqData = [
  {
    question: " Why to believe with VistaVroom rental service?",
    answer:
      "Believe in VistaVroom because we offer hassle-free bookings, transparent policies, and a reliable fleet of vehicles. With secure transactions, excellent customer service, and positive customer feedback, we ensure your trust is well-placed. Choose VistaVroom for a trustworthy and convenient car rental experience.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your reservation through your VistaVroom account or by contacting our customer support. Please note that cancellation policies vary based on the rental package and the time of cancellation. We recommend reviewing the terms and conditions for detailed information on modifications and cancellations.",
  },
  {
    question: "Is there a minimum or maximum rental period with VistaVroom?",
    answer:
      "VistaVroom offers flexible rental periods. You can rent a vehicle for as short as one day or for an extended period, depending on your requirements. There is no strict maximum rental period, making it convenient for long-term rentals such as monthly or even yearly arrangements.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(1);
  const faqsRef = useNav("FAQs");
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div ref={faqsRef} id="faqsSection" className="mt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          We've got <span className="green_text">answers</span>
        </h1>
        {faqData.map((data, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className="max-w-[860px] mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="text-dark-gray font-raleway uppercase tracking-wider"
            >
              {data.question}
            </AccordionHeader>
            <AccordionBody className="font-raleway tracking-wider">
              {data.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

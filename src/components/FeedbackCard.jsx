import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-6 py-8 rounded-[20px] max-w-[350px] md:mr-6 sm:mr-4 mr-0 my-5 bg-[#1F1F1F] feedback-card">
    {/* Quote icon */}
    <img
      src={quotes}
      alt="double_quotes"
      className="w-10 h-6 object-contain"
    />

    {/* Feedback content */}
    <p className="font-poppins font-normal text-[16px] leading-7 text-white my-6">
      {content}
    </p>

    {/* User info */}
    <div className="flex items-center mt-4">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[18px] leading-6 text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-5 text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;

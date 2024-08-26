import { faqData } from "@constants/faqData";

const FaqCard = ({ handleAnswer, answer }) => {
  console.log(faqData, "faqData");
  return (
    <div className=" m-5">
      <div className="flex flex-col items-start gap-2 dark:bg-primary-800 rounded-[50px] overflow-hidden">
        <h2 className="w-full p-5 text-[36px] md:text-[40px] pl-4 md:pl-10 text-center dark:bg-black">
          Frequently Asked Questions
        </h2>
        <div className="w-full p-5 flex flex-col py-10 divide-y divide-slate-500">
          {faqData.map((item, index) => (
            <p
              key={index}
              className={`flex items-center text-[18px] py-5 transition-all duration-700 relative ${
                answer?.id === item.id ? "text-[#3b9fd5]" : ""
              }`}
              onClick={() => handleAnswer(item.id)}
            >
              {answer?.id === item.id ? (
                <span className="animate-ping inline-flex rounded-full absolute bg-sky-400 opacity-75 h-3 w-3"></span>
              ) : null}
              <span
                className={` ${
                  answer?.id === item.id ? "pl-10" : ""
                } transition-all duration-700`}
              >
                {item.question}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;

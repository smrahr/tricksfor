import FaqCard from "@components/faq/FaqCard";
import { faqData } from "@constants/faqData";
import { useEffect, useState } from "react";

const Faq = () => {
  const [answer, setAnswer] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const handleAnswer = (id) => {
    const currentAnswer = faqData.find((item) => item.id === id);
    setAnswer(currentAnswer);
  };

  useEffect(() => {
    setIsShow(() => false);
    if (answer) {
      setTimeout(() => {
        setIsShow(() => true);
      }, 1000);
    }
  }, [answer]);

  return (
    <div className="container max-w-[1152px] ">
      <div className="flex flex-col-reverse md:flex-row  pt-[158px] md:pt-0">
        <div
          className={`${
            answer ? "md:w-[58%]" : "w-full"
          } transition-all duration-700`}
        >
          <FaqCard handleAnswer={handleAnswer} answer={answer} />
        </div>

        <div
          className={`transition-all duration-700 ${
            answer ? "w-full md:w-[38%]" : "w-0"
          } `}
        >
          <div
            className={`delay-1100 ${
              isShow ? "opacity-100" : "opacity-0"
            } w-full flex justify-center  px-5 py-16 transition-all duration-[2000ms]`}
          >
            <p className="text-[14px] font-bold text-center">
              {isShow ? answer?.answer : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

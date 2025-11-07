import { faqData } from "@constants/faqData";
import { useState } from "react";
import HtmlParser from "html-react-parser";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="dark:bg-primary-900 py-20 px-4">
      <div className="container max-w-[1152px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] md:text-[48px] font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Find answers to common questions about Tricksfor Gaming Hub
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-sm border-2 border-primary-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl"
              >
                {/* Question */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-[14px] md:text-[16px] shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <FaChevronUp className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                    ) : (
                      <FaChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <div className="pl-0 md:pl-14 border-l-4 border-blue-500/30 ml-0 md:ml-5">
                      <div className="pl-4 text-[14px] md:text-[15px] text-gray-300 leading-relaxed faq-answer">
                        {HtmlParser(item.answer)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-[14px]">
            Still have questions? Contact our support team for more help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

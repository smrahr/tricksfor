import PropTypes from "prop-types";

const HowItWorksSection = ({ item }) => {
  const Icon = item.icon;
  
  return (
    <div className="group bg-gradient-to-br from-primary-900/60 to-primary-800/60 border-2 border-primary-700/50 rounded-[30px] p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-white" />
        </div>
      </div>
      <h3 className="text-[20px] md:text-[24px] font-bold text-center mb-4 text-white">
        {item.title}
      </h3>
      <p className="text-[14px] md:text-[16px] text-gray-300 text-center leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

HowItWorksSection.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HowItWorksSection;

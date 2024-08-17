const HowItWorksSection = ({ item }) => {
  return (
    <div className="bg-primary-900 md:bg-primary-800 rounded-[50px] grow w-full">
      <div className="mb-2">
        <img src={item.src} alt="howItWorks" />
      </div>
      <h3 className="text-[28px] font-bold">{item.title}</h3>
      <p className="text-[24px]">{item.description}</p>
    </div>
  );
};

export default HowItWorksSection;

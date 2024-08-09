const HowItWorksSection = ({ item }) => {
  return (
    <div className="bg-primary-900 md:bg-primary-800 rounded-[50px] grow w-full p-12">
      <div className="mb-2">
        <img src={item.src} alt="howItWorks" />
      </div>
      <h2 className="text-[28px] font-bold">{item.title}</h2>
      <p className="text-[24px]">{item.description}</p>
    </div>
  );
};

export default HowItWorksSection;

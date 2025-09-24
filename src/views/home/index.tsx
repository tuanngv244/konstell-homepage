import AboutSection from './contents/about';
import AwardsSection from './contents/awards';
import CaseStudiesSection from './contents/case-studies';
import ClientsSaySection from './contents/clients-say';
import ContactSection from './contents/contact';
import DigitalTransformSection from './contents/digital-transform';
import HeroSection from './contents/hero';
import InsightsSection from './contents/insights';
import ModelManagementSection from './contents/model-management';
import PlatformSection from './contents/platform';
import QuestionsSection from './contents/questions';
import ServiceSection from './contents/service';
import TechnologySection from './contents/technology';
import TradingSysSection from './contents/trading-sys';
import WhyChooseUsSection from './contents/why-choose-us';
const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />

      <ServiceSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <DigitalTransformSection />
      <ClientsSaySection />
      <AwardsSection />
      <TechnologySection />
      <ModelManagementSection />
      <InsightsSection />
      <QuestionsSection />
    </div>
  );
};

export default HomePage;

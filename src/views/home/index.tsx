import AboutSection from './contents/about';
import BranchSection from './contents/branch';
import CaseStudiesSection from './contents/case-studies';
import ContactSection from './contents/contact';
import HeroSection from './contents/hero';
import PlatformSection from './contents/platform';
import ServiceSection from './contents/service';
import TradingSysSection from './contents/trading-sys';
import WhyChooseUsSection from './contents/why-choose-us';
const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <BranchSection />
      <ServiceSection />
      <CaseStudiesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default HomePage;

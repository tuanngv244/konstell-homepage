import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import DemoSection from './DemoSection';
import FeaturesSection from './FeaturesSection';

const FxTradingSystemPage = () => {
  return (
    <div className="fx-trading-system-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <DemoSection />
      <FeaturesSection />
    </div>
  );
};

export default FxTradingSystemPage;

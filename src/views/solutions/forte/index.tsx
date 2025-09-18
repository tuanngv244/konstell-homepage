import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import ChoosingForteSection from './ChoosingForteSection';
import FeaturesSection from './FeaturesSection';
import GetAheadForteAlgoSection from './GetAheadForteAlgoSection';
import ModernTradingSection from './ModernTradingSection';

const FortePage = () => {
  return (
    <div className="forte-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <ModernTradingSection />
      <ChoosingForteSection />
      <GetAheadForteAlgoSection />
    </div>
  );
};

export default FortePage;

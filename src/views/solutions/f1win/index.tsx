import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import ChoosingF1WinSection from './ChoosingF1WinSection';
import FeaturesSection from './FeaturesSection';

const F1WinPage = () => {
  return (
    <div className="f1win-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <ChoosingF1WinSection />
    </div>
  );
};

export default F1WinPage;

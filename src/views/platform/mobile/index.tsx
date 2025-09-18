import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import FeaturesSection from './FeaturesSection';

const MobilePlatformPage = () => {
  return (
    <div className="mobile-platform-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <ArchitecturesSection image="/images/pages/platform/en/platform-architectures-img-2.jpg" />
    </div>
  );
};

export default MobilePlatformPage;

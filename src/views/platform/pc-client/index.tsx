import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import FeaturesSection from './FeaturesSection';
import FunctionsSection from './FunctionsSection';
import SummarySection from './SummarySection';

const PCClientPlatformPage = () => {
  return (
    <div className="pc-client-platform-page ">
      <ChildHeroSection />
      <SectionTabsSection />
      <SummarySection />
      <FeaturesSection />
      <FunctionsSection />
      <ArchitecturesSection image="/images/pages/platform/en/platform-architectures-img-3.jpg" />
    </div>
  );
};

export default PCClientPlatformPage;

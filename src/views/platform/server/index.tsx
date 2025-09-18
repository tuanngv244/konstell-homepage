import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import FunctionsSectrion from './FunctionsSection';
import SummarySection from './SummarySection';
import UIControlSection from './UIControlSection';

const ServerPlatformPage = () => {
  return (
    <div className="server-platform-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <SummarySection />
      <FunctionsSectrion />
      <UIControlSection />
      <ArchitecturesSection image="/images/pages/platform/en/platform-architectures-img-1.jpg" />
    </div>
  );
};

export default ServerPlatformPage;

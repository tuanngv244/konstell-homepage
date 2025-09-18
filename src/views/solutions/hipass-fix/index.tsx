import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import CMEiLinkSection from './CMEiLinkSection';
import FeaturesSection from './FeaturesSection';
import MonitorServerSection from './MonitorServerSection';

const HipassFixPage = () => {
  return (
    <div className="hipass-fix-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <CMEiLinkSection />
      <MonitorServerSection />
    </div>
  );
};

export default HipassFixPage;

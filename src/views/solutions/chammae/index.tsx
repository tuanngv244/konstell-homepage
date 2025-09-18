import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import ReferencesSection from '../contents/references';
import SectionTabsSection from '../contents/section-tabs';
import SysSpecificationsSection from './SysSpecificationsSection';
import UnfairTransactionSection from './UnfairTransactionSection';

const ChammaePage = () => {
  return (
    <div className="chammae-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <SysSpecificationsSection />
      <UnfairTransactionSection />
      <ArchitecturesSection image="/images/pages/solutions/solutions-chammae-architectures-img.jpg" />
      <ReferencesSection
        references={[
          {
            logo: '/images/pages/solutions/references-logo/sulutions-ref-logo-img-1.png',
          },
        ]}
        layoutClss="lg:!grid-cols-[200px]"
      />
    </div>
  );
};

export default ChammaePage;

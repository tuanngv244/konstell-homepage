import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import ReferencesSection from '../contents/references';
import SectionTabsSection from '../contents/section-tabs';
import FeaturesSection from './FeaturesSection';

const HawkeyPage = () => {
  return (
    <div className="hawkey-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <ArchitecturesSection image="/images/pages/solutions/en/solutions-hawkey-architectures-img.jpg" />
      <ReferencesSection
        layoutClss="lg:!grid-cols-[repeat(4,200px)]"
        references={[
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-5.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-6.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-3.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-10.png',
          },
        ]}
      />
    </div>
  );
};

export default HawkeyPage;

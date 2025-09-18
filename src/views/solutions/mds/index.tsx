import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import ReferencesSection from '../contents/references';
import SectionTabsSection from '../contents/section-tabs';
import FeaturesSection from './FeaturesSection';

const MDSPage = () => {
  return (
    <div className="mds-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <FeaturesSection />
      <ArchitecturesSection image="/images/pages/solutions/en/solutions-mdps-architectures-img.jpg" />
      <ReferencesSection
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
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-1.png',
          },
        ]}
      />
    </div>
  );
};

export default MDSPage;

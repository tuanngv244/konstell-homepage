import ArchitecturesSection from '../contents/architectures';
import ChildHeroSection from '../contents/child-hero';
import ReferencesSection from '../contents/references';
import SectionTabsSection from '../contents/section-tabs';
import ExchCoverageSection from './ExchCoverageSection';
import FeaturesSection from './FeaturesSection';
import MarginComponentSection from './MarginComponentSection';
import SharedMemorySyncSection from './SharedMemorySyncSection';

const PrimaPage = () => {
  return (
    <div className="prima-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <MarginComponentSection />
      <ExchCoverageSection />
      <FeaturesSection />
      <SharedMemorySyncSection />
      <ArchitecturesSection image="/images/pages/solutions/en/solutions-prima-architectures-img.jpg" />
      <ReferencesSection
        references={[
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-1.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-2.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-3.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-4.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-5.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-6.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-7.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-8.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-9.png',
          },
          {
            logo: '/images/pages/solutions/en/references-logo/sulutions-ref-logo-img-10.png',
          },
        ]}
      />
    </div>
  );
};

export default PrimaPage;

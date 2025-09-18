import AboutSection from './contents/about';
import ContactSection from '@/views/home/contents/contact';
import HeroSection from './contents/hero';
import TimelineSection from './contents/timeline';
import ServiceSection from './contents/services';
import RecruitmentSection from './contents/recruitment';
const CompanyPage = () => {
  return (
    <div className="company-page">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ServiceSection />
      <RecruitmentSection />
      <ContactSection />
    </div>
  );
};

export default CompanyPage;

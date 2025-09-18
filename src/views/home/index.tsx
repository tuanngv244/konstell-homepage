import AboutSection from './contents/about';
import ContactSection from './contents/contact';
import HeroSection from './contents/hero';
import PlatformSection from './contents/platform';
import TradingSysSection from './contents/trading-sys';
const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <TradingSysSection />
      <PlatformSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

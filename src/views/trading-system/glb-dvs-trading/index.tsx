import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import HTSSection from './HTSSection';
import LedgerSystemSection from './LedgerSystemSection';
import MarketDataSystemSection from './MarketDataSystemSection';
import MTSSection from './MTSSection';

const GlobalDerivativesTradingPage = () => {
  return (
    <div className="glb-dvs-trading-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <HTSSection />
      <MTSSection />
      <MarketDataSystemSection />
      <LedgerSystemSection />
    </div>
  );
};

export default GlobalDerivativesTradingPage;

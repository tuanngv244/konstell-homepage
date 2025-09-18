import ChildHeroSection from '../contents/child-hero';
import SectionTabsSection from '../contents/section-tabs';
import FixGatewaySection from './FixGatewaySection';
import HTSSection from './HTSSection';
import LedgerSystemSection from './LedgerSystemSection';
import MarketDataSection from './MarketDataSection';

const GlobalEquityTradingPage = () => {
  return (
    <div className="glb-equity-trading-page">
      <ChildHeroSection />
      <SectionTabsSection />
      <HTSSection />
      <MarketDataSection />
      <LedgerSystemSection />
      <FixGatewaySection />
    </div>
  );
};

export default GlobalEquityTradingPage;

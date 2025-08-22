import HiroSection from "./HiroSection";
import FoundationSection from "./FoundationSection";
import CallToActionSection from "./CallToActionSection";
import LifeFuelSection from "./LifeFuelSection";
import FutureProducts from "./FutureProducts";
import ThreePillars from "./ThreePillars";
import DigitalPillar from './DigitalPillar';
import VitalAssets from './VitalAssets';
import TransparentGovernance from './TransparentGovernance';
import MJLegacy from './MJLegacy';
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div
      className="home-background"
      style={isMobile ? { paddingBottom: "120px" } : { paddingBottom: "90px" }}
    >
      <HiroSection />
      <FoundationSection />
      <CallToActionSection />
      <LifeFuelSection />
      <FutureProducts />
      <ThreePillars />
      <DigitalPillar />
      <VitalAssets />
      <TransparentGovernance />
      <MJLegacy />
    </div>
  );
}

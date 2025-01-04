import CloudSection from "./Components/Cloudsection";
import AlcherApp from "./_alcher-app-section/AlcherApp";
// import Merch from "./_merch-section/Merch";
import EventSec from "./events-section/EventSec";
import SponsorSection from "./sponsor-section/SponsorSec";

export default function Page() {
  return (
    <div>
      <CloudSection/>
      <SponsorSection/>
      <EventSec/>
      <AlcherApp />
    </div>
  );
}

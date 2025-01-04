import CloudSection from "./Components/Cloudsection";
import AlcherApp from "./_alcher-app-section/AlcherApp";
// import Merch from "./_merch-section/Merch";
import EventSec from "./_events-section/EventSec";
import SponsorSection from "./_sponsor-section/SponsorSec";

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
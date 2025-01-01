
import AlcherApp from "./_alcher-app-section/AlcherApp";
import Merch from "./_merch-section/Merch";
import EventSec from "./events-section/EventSec";
import SponsorSection from "./sponsor-section/SponsorSec";


export default function Page() {
  return (
    <div>
      <SponsorSection/>
      <EventSec/>
      {/* <Merch /> */}
      <AlcherApp />
      
    </div>
  );
}
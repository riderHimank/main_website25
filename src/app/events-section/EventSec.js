import "./events.css";

import rect from "./_components/rectangle.png";
import event2 from "./_components/event2.png";
import pshows from "./_components/pshows1.png";
import evbtn from "./_components/evbtn.png";
import compbtn from "./_components/compbtn.png";
import dashline from "./_components/dashline.png";
import arrow from "./_components/arrow.png";

import Image from "next/image";
const EventSec = () => {
  return (
    <div className="events">
      <div className="heading">
        <div className="header-section">
          <div className="intro">
            <h1 id="inst1">How about we </h1>

            <Image src={rect} alt="line" className="underline" />
            <h1 id="inst2">
              have a <span>Look</span>
            </h1>
            <Image src={rect} alt="line" className="underline2" />
            <div className="high">
              {" "}
              <h1 id="inst3">
                {" "}
                at the <span className="highlight">Highlights</span>
              </h1>
              ,<Image src={arrow} id="arrow" />
            </div>
            <Image src={rect} alt="line" className="underline3" />
          </div>
          <div class="random-text-container">
            <span class="random-text" id="rndtext1">
              [a] This is Nice???
            </span>
            <span class="random-text" id="rndtext2">
              [a] Gotta grab that
            </span>
            <span class="random-text" id="rndtext3">
              [a] Game is on
            </span>
          </div>
        </div>
      </div>

      <div className="cards-section">
        <div className="event-card">
          <Image src={pshows} alt="Pronites" />
        </div>
        <div className="event-card">
          <Image src={event2} alt="Proshows" />
        </div>

        <div className="events-text" id="event-crd">
          <div className="event-container">
            <Image src={dashline} alt="ff" className="lines" />
            <h2>
              <span>Exciting Events - </span>
              <br />
              <span>Performances, Talks and</span>
              <br />
              <span>Concerts...</span>
              <br />
            </h2>
            <Image src={dashline} alt="ff" className="lines" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique purus eu libero egestas, sed bibendum felis tincidunt.
              Proin ultricies viverra mollis. Nullam vel quam tortor. Duis
              egestas libero velit,
            </p>
            {/* <button className="events-button">
              <Image src={evbtn} alt="ff" />
            </button> */}
          </div>
        </div>
      </div>

      <div className="cards-section">
        <div className="events-text">
          <Image src={dashline} />
          <h2>
            <span>Exciting Events - </span>
            <br />
            <span>Performances, Talks and</span>
            <br />
            <span>Concerts...</span>
            <br />
          </h2>
          <Image src={dashline} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique purus eu libero egestas, sed bibendum felis tincidunt.
            Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas
            libero velit,
          </p>
          {/* <button className="events-button">
            <Image src={compbtn} alt="" />
          </button> */}
        </div>
        <div className="event-card">
          <Image src={pshows} alt="Pronites" />
        </div>
        <div className="event-card">
          <Image src={event2} alt="Proshows" />
        </div>
      </div>
    </div>
  );
};

export default EventSec;

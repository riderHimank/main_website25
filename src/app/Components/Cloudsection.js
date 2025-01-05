'use client'

import Image from "next/image";
import SlotCounter from 'react-slot-counter';
import { useEffect, useState } from "react";

const CloudSection = () => {
    const [event_stat, setEventStat] = useState(0);
    const [footfall_stat, setFootfallStat] = useState(0);
    const [competition_stat, setCompetitionStat] = useState(0);

    useEffect(() => {
        setEventStat(45);
        setFootfallStat(45);
        setCompetitionStat(45);
        // return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            <div>
                <Image
                    src="/redlines.png"
                    alt="redlines"
                    width={100}
                    height={100}
                    className="redlines"
                />
            </div>

            <section className="clouds">
                <div>
                    <Image
                        src="/cloud1u.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fu cloud"
                    />
                    <Image
                        src="/cloud1b.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fb cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloud2u.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="su cloud"
                    />
                    <Image
                        src="/cloud2d.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="sd cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloud3.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="tu cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloudlu.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lu cloud"
                    />
                    <Image
                        src="/cloudlb.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lb cloud"
                    />
                </div>
            </section>
            <div className="logo">
                <Image
                    src="/alcherlogo 1.svg"
                    alt="alcher"
                    width={100}
                    height={100}
                    className="alcherlogo"
                />
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor tellus. Nulla porttitor felis a scelerisque feugiat. Praesent faucibus libero ac velit interdum rutrum. Vestibulum viverra volutpat laoreet.</p>

                <p>Vivamus tempus dui ac consectetur eleifend. Sed mauris metus, porta finibus diam non, aliquet congue libero. Nullam sit amet ante quis magna varius maximus tincidunt eu tellus. Proin varius sem imperdiet tempor mattis. In facilisis felis a facilisis fringilla. Duis volutpat velit a nunc tincidunt sagittis. Fusce arcu nisl, tristique id posuere sit amet, semper sit amet urna. Etiam nec enim eu nulla placerat rutrum. Aliquam erat volutpat. Quisque aliquet placerat ligula, quis tempus magna maximus eget. Nulla egestas nisi vel nulla mattis, sed consectetur ante hendrerit. Pellentesque magna ex, volutpat sit amet placerat eget, iaculis sed dui. Donec fermentum quis mi eu malesuada. Fusce ultricies risus quis mi condimentum auctor. In at dui urna.</p>
            </div>
            <div>
                <div className="relative">
                    <video
                        autoPlay
                        loop
                        muted
                        className="video-container"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                    <div className="stats-section">
                        <div className="stats-flex">
                            <div className="stat-item">
                                <h2 className="stat-title">   <SlotCounter
                                    startValue={event_stat}
                                    value={100}
                                    duration={1} 
                                    speed={1.4}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
                                />+</h2>
                                <p className="stat-description">Events</p>
                            </div>
                            <div className="stat-item">
                                <h2 className="stat-title"> <SlotCounter
                                    startValue={footfall_stat}
                                    value={140}
                                    duration={1}
                                    speed={1.2}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
                                />K+</h2>
                                <p className="stat-description">Footfall</p>
                            </div>
                            <div className="stat-item">
                                <h2 className="stat-title"> <SlotCounter
                                    startValue={competition_stat}
                                    value={45}
                                    duration={1}
                                    speed={1.4}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}

                                />+</h2>
                                <p className="stat-description">Competitions</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CloudSection;

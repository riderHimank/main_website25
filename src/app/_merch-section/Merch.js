
"use client"
import './merch.css'
import Image from 'next/image'
import { useEffect } from 'react'

const Merch = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./grid.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="merch">
            <Image src="./tetris.svg" alt="merch" width={500} height={500} className='merch_text' />
            <Image src="./tetris-mobile.svg" alt="merch" width={500} height={500} className='mobile_text' />
           <Image src="./tshirts.svg" alt="merch" width={500} height={500} className='tshirts' />
            <a href="/merch">
                <Image src="./merch-btn.svg" alt="merch" width={500} height={500} className='merch_btn' />
            </a>
        </div>
    )
}

export default Merch;
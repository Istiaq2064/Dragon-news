import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200 p-3'>
            <p className='bg-[#D72050] text-base-100 px-3'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to="/news">
                    The bilateral relationship must be based on a "win-win" policy, rooted in mutual respect, non-hegemony, and the pursuit of shared prosperity and deeper</Link>
                <Link to="/news">
                    Heavy with golden Darjeeling and green China Mandarin varieties, the trees in this orange orchard in Sreepur sway gently in the breeze. The orchard isn't just a place for cultivation, it has become a meeting point for people. Buyers and visitors arrive in droves, lured by the allure of plucking fresh fruit.</Link> <br />
                <Link to="/news">                  
                    Train services on the Dhaka-Benapole route via the Padma Bridge will start on December 2.Padma Rail Link Project Director Md Afzal Hossain said, "We are hopeful about officially launching passenger train services on the Dhaka-Benapole section via the Padma Bridge from December 2."</Link> <br />
                <Link to="/news">
                    The interim government that took the helm of Bangladesh amid high expectations completed its 100 days in office recently. These few months have been fraught with challenges for Chief Adviser Professor Muhammad Yunus. The Daily Star Editor and Publisher Mahfuz Anam sat down with the Nobel peace laureate for an exclusive interview where he spoke about issues ranging from reforms and election to media and foreign policy. An abridged version of the interview was published on Wednesday. Click on the link below for the full interview.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
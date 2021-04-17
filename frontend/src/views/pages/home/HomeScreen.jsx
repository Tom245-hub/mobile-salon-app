import React from 'react';

import SliderMain from './sections/SectionSlider';
import SectionServices from './sections/SectionServices';
import SectionTeam from './sections/SectionTeam';
import SectionSlider from './sections/SectionSlider';


const HomeScreen = () => {

    return (
        <div className="container-fluid p-0">

            <div className="container-fluid p-0 mb-5">
                <SectionSlider />
            </div>

            <div className="container py-5 mb-5">
                <SectionServices />
            </div>

            <div className="container-fluid py-5 bg-light mb-5">
                <SectionTeam />
            </div>

        </div>
    )
}

export default HomeScreen

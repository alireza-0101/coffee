import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import IntroductionLanding from '../../components/IntroductionLanding/IntroductionLanding';
import Landing from '../../components/Landing/Landing';
import LastUserSlider from '../../components/LastUserSlider/LastUserSlider';
import ProUsersSlider from '../../components/ProUsersSlider/ProUsersSlider';
import StepByStep from '../../components/StepByStep/StepByStep';
import ContactUs from '../../components/ContactUs/ContactUs';

export default function Home() {
    return (
        <>
            <Header />
            <Landing />
            <ProUsersSlider />
            <IntroductionLanding />
            <StepByStep />
            <LastUserSlider />
            <ContactUs />
            <Footer />
        </>
    )
}

import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StepByStep from '../../components/StepByStep/StepByStep';
import ContactUs from '../../components/ContactUs/ContactUs';
import LastUserSlider from '../../components/LastUserSlider/LastUserSlider';
import WeSupportYou from '../../components/WeSupportYou/WeSupportYou';

export default function Guide() {
    return (
        <>
            <Header />
            <StepByStep />
            <WeSupportYou />
            <LastUserSlider />
            <ContactUs />
            <Footer />
        </>
    )
}

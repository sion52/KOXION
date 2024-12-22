import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import UIUX from "../components/UIUX";
import Infomation from "../components/Infomation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomeView = () => {
    return (
        <>
            <Header />
            <Main>
                <UIUX />
                <Infomation />
                <Contact />
            </Main>
            <Footer />
        </>
    )
}
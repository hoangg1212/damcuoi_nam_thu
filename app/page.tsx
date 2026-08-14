import WeddingProvider from "@/components/providers/WeddingProvider";

import Preloader from "@/components/Preloader";

import InvitationCover from "@/components/InvitationCover";

import Header from "@/components/Header";

import Hero from "@/components/Hero";

import Couple from "@/components/Couple";

import LoveQuote from "@/components/LoveQuote";

import LoveStory from "@/components/LoveStory";

import Countdown from "@/components/Countdown";

import Gallery from "@/components/Gallery";

import WeddingEvent from "@/components/WeddingEvent";

import WeddingMessage from "@/components/WeddingMessage";

import WishesForm from "@/components/WishesForm";

import Ending from "@/components/Ending";

import Footer from "@/components/Footer";

import MusicPlayer from "@/components/MusicPlayer";

import FloatingHearts from "@/components/FloatingHearts";

import BackToTop from "@/components/BackToTop";

import CustomCursor from "@/components/CustomCursor";


export default function Home() {

    return (

        <WeddingProvider>

            <Preloader />


            <InvitationCover />


            <Header />


            <main>

                <Hero />

                <Couple />

                <LoveQuote />

                <LoveStory />

                <Countdown />

                <Gallery />

                <WeddingEvent />

                <WeddingMessage />

                <WishesForm />

                <Ending />

            </main>


            <Footer />


            {/* TOOL */}

            <MusicPlayer />

            <FloatingHearts />

            <BackToTop />

            <CustomCursor />

        </WeddingProvider>
    );
}
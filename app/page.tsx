/* =========================================================
   PHẦN 3 - APP/PAGE.TSX
   THỨ TỰ MỚI CỦA TOÀN BỘ WEBSITE CƯỚI
========================================================= */

import WeddingProvider from "@/components/providers/WeddingProvider";

import Preloader from "@/components/Preloader";
import InvitationCover from "@/components/InvitationCover";

import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Couple from "@/components/Couple";

import WeddingDetails from "@/components/WeddingDetails";

import LoveQuote from "@/components/LoveQuote";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";

import WeddingMessage from "@/components/WeddingMessage";
import WishesForm from "@/components/WishesForm";

import Countdown from "@/components/Countdown";

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

                <WeddingDetails />

                <LoveQuote />

                <LoveStory />

                <Gallery />

                <WeddingMessage />

                <WishesForm />

                <Countdown />

                <Ending />

            </main>


            <Footer />

            <MusicPlayer />

            <FloatingHearts />

            <BackToTop />

            <CustomCursor />

        </WeddingProvider>

    );
}
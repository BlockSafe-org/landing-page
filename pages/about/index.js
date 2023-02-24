import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import { founderOne, founderTwo } from "../../components/data";
import Founder from "../../components/founder";

export default function About() {
    return (
        <>
        <div style={{padding:50}}>
         <Head>
        <title>BlockSafe, secured with blockchain Technology.</title>
            <meta
                name="description"
                content="BlockSafe, secured with blockchain Technology."/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <SectionTitle pretitle=""
        title="About the Founders">
        </SectionTitle>
        <Founder data={founderOne} linkedin="https://www.linkedin.com/in/benzidarwin/" twitter="https://twitter.com/SsaliBenjamin2" instagram="https://www.instagram.com/benzi.darwin/">
        "The goal of this organization was to bring people together and promote global economic progress. The cost of transactions and the amount of time required to transfer money across borders are huge, so I considered what I could do as a blockchain developer to just highlight that one positive aspect of blockchain so that even those who are unfamiliar with how to use a blockchain can profit from it."
        </Founder>
        <Founder imgPos="right" data={founderTwo} linkedin="https://www.linkedin.com/in/trevor-simon-6b6575254/" twitter="https://twitter.com/Sportcheck01" instagram="https://www.instagram.com/semwotrents/">
        "This organization was formed with the hope of easing banking globally through the blockchain. The E-commerce platform could help out many globally especially we in African countries that don't have easy access to products in European countries."
        </Founder>
        </div>
        <Footer />
        </>
        )
    }
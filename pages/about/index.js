import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";

export default function About() {
    return (
        <>
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
        <Footer />
        </>
        )
    }
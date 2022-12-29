import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";

export default function Gencoin() {
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
        <SectionTitle pretitle="Features"
        title="Features of BlockSafe">
            What about BlockSafe?
        </SectionTitle>
        <Footer />
        </>
        )
    }
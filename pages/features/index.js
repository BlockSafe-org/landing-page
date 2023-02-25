import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import SectionTitle from "../../components/sectionTitle";
import Row from "../../components/row";
import { featureFour, featureOne, featureThree, featureTwo } from "../../components/data";

export default function Features() {
    return (
        <>
        <div>
         <Head>
        <title>BlockSafe, secured with blockchain Technology.</title>
            <meta
                name="description"
                content="BlockSafe, secured with blockchain Technology."/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <SectionTitle
        title="Features of BlockSafe"/>
        <Row data={featureOne}/>
        <Row data={featureTwo} imgPos="right"/>
        <Row data={featureThree} />
        <Row data={featureFour} imgPos="right"/>
        </div>
        <Footer />
        </>
        )
    }
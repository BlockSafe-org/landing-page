import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import Row from "../../components/row";
import { gencoinOne, gencoinTwo} from "../../components/data";

export default function Gencoin() {
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
        <Row data={gencoinOne}/>
        <Row data={gencoinTwo} imgPos="right"/>
        </div>
        <Footer />
        </>
        )
    }
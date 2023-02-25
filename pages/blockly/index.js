import Navbar from "../../components/navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import blocklyLogo from "../../public/img/blockly.png";
import Image from "next/image";
import TitleIntro from "../../components/titleIntro";
import "bulma/css/bulma.min.css";

export default function Blockly() {
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
        <div className="flex w-full flex-col mt-4 items-center justify-center text-center">
        <Image
                  src={blocklyLogo}
                  alt="Benefits"
                  layout="intrinsic"
                  placeholder="blur"
                />
        </div>
        <TitleIntro
        title="Blockly, the Global E-commerce Platform">
            <p>
          Blockly is the E-commerce platform attached to BlockSafe to allow a user to do buying and selling of goods without 
          having to take any money out of the app. It is quick, cheaper, secure and the goods are affordable. Paying for goods is not only limited
          to BlockSafe but you can also pay for goods via MasterCard or Visa.
      </p><br />
      <p>
          Blockly will be coming soon to BlockSafe in the future builds of the application.
      </p>
        </TitleIntro>
        <TitleIntro title="What we offer">
        <div className="columns">
      <div className="column">
        <ul className="m-1" style={{"list-style-type": "none"}}>
          <li>Goods at wholesale prices (no middle men involved)</li>
          <li>An opportunity for retailers to market their goods globally for an affordable monthly cost.</li>
          <li>Direct payment of merchants on purchase of their goods.</li>
          <li>Accountablity, records and statistics of sales made.</li>
        </ul>
      </div>
      <div className="column">
      <ul style={{"list-style-type": "none"}}>
          <li>Tracking of Goods</li>
          <li>Good delivery services</li>
          <li>Customer care and support</li>
        </ul>
      </div>
    </div>
        </TitleIntro>
        </div>
        <Footer />
        </>
        )
    }
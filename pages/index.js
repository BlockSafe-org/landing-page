import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
// import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>BlockSafe, secured with blockchain Technology.</title>
        <meta
          name="description"
          content="BlockSafe, secured with blockchain Technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Why BlockSafe"
        // TODO: Add appropriate wording everywhere neccessary
        title=" Why should you use blocksafe">
        A user can borrow upto 80% of what they have staked. Users will then be charged with interest of 2.5% of what they have borrowed and
        are free to pay back any time they get the money. On unstaking, the money will be automatically deducted on end of the stake period.

      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="A breakdown of all blocksafe's features in one video">
        A highlight of all blocksafe's features in one video.
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

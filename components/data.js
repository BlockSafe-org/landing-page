import {
  SaveIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  CurrencyPoundIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/casual-life-3d-using-smartphone-to-shop-for-gifts.png";
import benefitTwoImg from "../public/img/3d-casual-life-credit-card-and-chart-column.png";
import featureOneImg from "../public/img/swap.jpg";
import featureTwoImg from "../public/img/sending.jpg";
import featureThreeImg from "../public/img/shop.png";
import featureFourImg from "../public/img/gencoin.png";
import tokenImg from "../public/img/gencoin.png";
import stakeImg from "../public/img/saving.jpg";
import founderOneImg from "../public/img/founder1.jpg";
import founderTwoImg from "../public/img/founder2.jpg";

const benefitOne = {
  title: "Highlighted Features",
  desc: "Some of the most outstanding features of BlockSafe",
  image: benefitOneImg,
  bullets: [
    {
      title: "Blockly",
      desc: "Spend money within the app, without actually having to withdraw it.",
      icon: <SaveIcon />,
    },
    {
      title: "Swapping of Tokens",
      desc: "Swap ERC20 tokens through our app at low and affordable rates.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Earn Gencoin",
      desc: "Earn 2% for each deposit or swap made on the platform.",
      icon: <CurrencyPoundIcon />,
    }
  ],
};

const benefitTwo = {
  title: "Additional Features",
  desc: "BlockSafe has more than you could've ever imagined",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Simplified use of the Blockchain",
      desc: "Simplifies the use of the blockchain into your everyday banking app.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Security",
      desc: "Secure and transparent through the use of Blockchain technology.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Accountability",
      desc: "All transaction information is stored both on the blockchain and on Google servers through Firebase.",
      icon: <SunIcon />,
    },
  ],
};

const featureOne = {
  title: "Swapping",
  desc: "Users have access to many ERC2O tokens they can swap to. All for a low cost. We also offer live price updates for these different cryptocurrencies.",
  image: featureOneImg,
};


const featureTwo = {
  title: "Transfer",
  desc: " A user will be able to send funds to any user of the app in any part of the world. Deposits and withdraws are done using Flutterwave API (Standard costs apply). Users will also be able to send money to any ethereum address so they are not only limited to users of the application.",
  image: featureTwoImg,
};

const featureThree = {
  title: "E-commerce platform",
  desc: "BlockSafe features an integrated e-commerce site where you may access things without taking money out of your account or you can promote your goods globally as a merchant for a reasonable charge.",
  image: featureThreeImg,
};

const featureFour = {
  title: "Reward Token",
  desc: "Users can earn 2% for each deposit or swap made on the platform.",
  image: featureFourImg,
};

const gencoinOne = {
  title: "What is Gencoin?",
  desc: "Gencoin is an ERC20 token deployed on the Ethereum Blockchain. Gencoin can only be minted through depositing and swapping tokens within the BlockSafe application.",
  image: tokenImg,
}

const gencoinTwo = {
  title: "Proof of Stake",
  desc: "When a user of the Blocksafe system deposits or swaps some funds, they will receive 2% in their accounts in form  of Gencoin returned as a reward for using the platform.",
  image: stakeImg,
}

const founderOne = {
  title:"Co-Founder",
  name: "Ssali Benjamin Tamale",
  image: founderOneImg
}

const founderTwo = {
  title:"Co-Founder",
  name: "Ssemwogerere Trevor Simon",
  image: founderTwoImg
}

export { benefitOne, benefitTwo, featureOne, featureTwo, featureThree, featureFour, gencoinOne, gencoinTwo, founderOne, founderTwo};

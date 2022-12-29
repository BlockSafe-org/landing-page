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
import featureOneImg from "../public/img/piggybank.jpg";
import featureTwoImg from "../public/img/borrow.png";
import featureThreeImg from "../public/img/sending.jpg";
import featureFourImg from "../public/img/shop.png";
import tokenImg from "../public/img/gencoin.png";
import stakeImg from "../public/img/saving.jpg";

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
      title: "Proof of Stake",
      desc: "Earn up to 10% of what you stake in Gencoin.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "No transfer limits",
      desc: "There is no limit to how much you can send or receive.",
      icon: <CurrencyPoundIcon />,
    },
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
  title: "Staking",
  desc: " When a user stakes some funds using the Blocksafe application, they are essentially lending Blocksafe with money for a fixed period of time expecting a certain interest back at the end of the time period. The funds will automatically be put onto the users account on end of the stake period.",
  image: featureOneImg,
};

const featureTwo = {
  title: "Borrowing",
  desc: "A user can borrow upto 80% of what they have staked. Users will then be charged with interest of 2.5% of what they have borrowed and are free to pay back any time they get the money. On unstaking, the money will be automatically deducted on end of the stake period.",
  image: featureTwoImg,
};

const featureThree = {
  title: "Transfer",
  desc: " A user will be able to send funds to any user of the app in any part of the world. Deposits and withdraws are done using Flutterwave API (Standard costs apply). Users will also be able to send money to any ethereum address so they are not only limited to users of the application.",
  image: featureThreeImg,
};

const featureFour = {
  title: "E-commerce platform",
  desc: "BlockSafe features an integrated e-commerce site where you may access things without taking money out of your account or you can promote your goods globally as a merchant for a reasonable charge.",
  image: featureFourImg,
};

const gencoinOne = {
  title: "What is Gencoin?",
  desc: "Gencoin is an ERC20 token deployed on the Ethereum Blockchain. Gencoin can only be minted through borrowing and staking tokens within the BlockSafe application. The token can only be minted by staking some funds in the BlockSafe application where you earn 10% of what you have staked in Gencoin.",
  image: tokenImg,
}

const gencoinTwo = {
  title: "Proof of Stake",
  desc: "When a user of the Blocksafe system stakes some funds, they will receive 10% of what they have staked info in their accounts in form  of Gencoin returned as a reward for using the protocol.",
  image: stakeImg,
}

export { benefitOne, benefitTwo, featureOne, featureTwo, featureThree ,featureFour, gencoinOne, gencoinTwo};

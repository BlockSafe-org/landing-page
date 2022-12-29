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

export { benefitOne, benefitTwo };

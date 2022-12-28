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
      title: "Blockyly",
      desc: "Spend money wintin the app, without actually having to withdraw it.",
      icon: <SaveIcon />,
    },
    {
      title: "Proof of Stake",
      desc: "Talk more about proof of stake here",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Staking",
      desc: "Talk more about stake here",
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
      title: "Mobile Responsive design",
      desc: "Talk more about the feature here",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Security",
      desc: "Talk more about the feature here as well",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Feature",
      desc: "Talk more about the feature here as well",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };

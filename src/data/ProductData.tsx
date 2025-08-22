import OrganicHoneymain1 from "../img/OrganicHoneymain1.jpg";
import Moringa from "../img/green-vitality.jpg";
import smartwaterbottle from "../img/smart-water-bottle.jpg";
import productivity from "../img/meets-productivity.jpg";
import lifefuel from "../img/lifefuelmain.jpg";
import pot1 from "../img/pot1.jpg";
import pot2 from "../img/pot2.jpg";
import pot3 from "../img/pot3.jpg";
import pot4 from "../img/pot4.jpg";
import other1 from "../img/other1.jpg";
import other2 from "../img/other2.jpg";
import OrganicHoneymain from "../img/OrganicHoneymain.jpg";
import MoringaPowder1 from "../img/green-goodness.jpg";
import healthyhabits from "../img/healthy-habits.jpg";
import sippingsunshine from "../img/sipping-sunshine.jpg";
import lifefuel1 from "../img/meets-productivity.jpg";
import pot1Big from "../img/pot1-big.jpg";
import pot2Big from "../img/pot2-big.jpg";
import pot3Big from "../img/pot3-big.jpg";
import pot4Big from "../img/pot4-big.jpg";
import other1Big from "../img/other1-big.jpg";
import other2Big from "../img/other2-big.jpg";

export type ProductProps = {
  category: string;
  image: string;
  imageBig: string;
  name: string;
  price: number;
  sold: number;
  id: string;
  description: string;
};

export const ProductData: ProductProps[] = [
  {
    category: "LifeFuel",
    image: OrganicHoneymain1,
    imageBig: OrganicHoneymain,
    name: "Organic Honey",
    price: 139,
    sold: 22,
    id: "01",
    description:
      "Pure, natural honey sourced transparently from diverse regions of Bangladesh. Bottled with integrity for global distribution.",
  },
  {
    category: "LifeFuel",
    image: Moringa,
    imageBig: MoringaPowder1,
    name: "Moringa Powder",
    price: 159,
    sold: 35,
    id: "02",
    description:
      "Ethically harvested from local farmers. Packaged with zero tolerance for adulteration and distributed worldwide.",
  },
  {
    category: "LifeFuel",
    image: smartwaterbottle,
    imageBig: healthyhabits,
    name: "Smart Water Bottle",
    price: 139,
    sold: 17,
    id: "03",
    description:
      "A hydration companion with built-in software to track intake, remind drinking times, and promote wellness rituals.",
  },
  {
    category: "LifeFuel",
    image: productivity,
    imageBig: sippingsunshine,
    name: "Smart Alerts",
    price: 99,
    sold: 5,
    id: "04",
    description:
      "Gentle reminders via app or LED to keep you hydrated. Rechargeable, BPA-free, and designed for long-term use.",
  },
  {
    category: "LifeFuel",
    image: lifefuel,
    imageBig: lifefuel1,
    name: "Life Fuel",
    price: 149,
    sold: 13,
    id: "05",
    description:
      "Raw, unprocessed honey harvested from pesticide-free hives.",
  },
  {
    category: "LifeFuel1",
    image: pot1,
    imageBig: pot1Big,
    name: "Matte Gray",
    price: 139,
    sold: 22,
    id: "06",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "LifeFuel1",
    image: pot2,
    imageBig: pot2Big,
    name: "Round Bowl",
    price: 129,
    sold: 35,
    id: "07",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "LifeFuel1",
    image: pot3,
    imageBig: pot3Big,
    name: "Creemy Gray",
    price: 159,
    sold: 17,
    id: "08",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: pot4,
    imageBig: pot4Big,
    name: "Pot with Foot",
    price: 169,
    sold: 5,
    id: "09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: other1,
    imageBig: other1Big,
    name: "Soil",
    price: 89,
    sold: 17,
    id: "10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: other2,
    imageBig: other2Big,
    name: "Shovel",
    price: 69,
    sold: 5,
    id: "11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: pot1,
    imageBig: pot1Big,
    name: "Matte Gray",
    price: 139,
    sold: 22,
    id: "06",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: pot2,
    imageBig: pot2Big,
    name: "Round Bowl",
    price: 129,
    sold: 35,
    id: "07",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: pot3,
    imageBig: pot3Big,
    name: "Creemy Gray",
    price: 159,
    sold: 17,
    id: "08",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: pot4,
    imageBig: pot4Big,
    name: "Pot with Foot",
    price: 169,
    sold: 5,
    id: "09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Products",
    image: other1,
    imageBig: other1Big,
    name: "Soil",
    price: 89,
    sold: 17,
    id: "10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Vital Assets",
    image: pot4,
    imageBig: pot4Big,
    name: "Pot with Foot",
    price: 169,
    sold: 5,
    id: "09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Vital Assets",
    image: other1,
    imageBig: other1Big,
    name: "Soil",
    price: 89,
    sold: 17,
    id: "10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Vital Assets",
    image: other2,
    imageBig: other2Big,
    name: "Shovel",
    price: 69,
    sold: 5,
    id: "11",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
  {
    category: "Vital Assets",
    image: pot1,
    imageBig: pot1Big,
    name: "Matte Gray",
    price: 139,
    sold: 22,
    id: "06",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a fringilla ipsum, vel condimentum felis. Donec imperdiet tortor nec libero mollis, efficitur laoreet tortor dictum. Quisque scelerisque semper dolor, consectetur tincidunt eros egestas a.",
  },
];

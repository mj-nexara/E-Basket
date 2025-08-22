import CategoryLifefuel from "../img/lifefuelmain.jpg";
import CategoryDigital from "../img/digital-innovation.jpg";
import CategoryGovernance from "../img/transparent-governance.jpg";

type CategoryProps = {
  categoryName: string;
  image: string;
  description: string;
};

export const CategoryData: CategoryProps[] = [
  {
    categoryName: "LifeFuel",
    image: CategoryLifefuel,
    description:
      "Essential products for sustainable living, wellness, and symbolic connection—each crafted with purity, purpose, and public proof.",
  },
  {
    categoryName: "Digital",
    image: CategoryDigital,
    description:
      "Cutting-edge digital solutions, CLI tools, and development resources for modern workflows.",
  },
  {
    categoryName: "Governance",
    image: CategoryGovernance,
    description:
      "Governance is the backbone of ethical commerce. NexaraOne empowers communities to lead with transparency and trust.",
  },
];

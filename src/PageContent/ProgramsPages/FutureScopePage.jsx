import React from "react";
import { useParams } from "react-router-dom";
import FutureScope from "../ProgramsMenus/FutureScope";

const FutureScopePage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      description:
        "With the rapid expansion of the food processing sector, increasing food safety regulations, and the demand for value-added products, B.Tech (Food Technology) plays a crucial role in strengthening the food industry. The program builds strong foundations in food processing, preservation, packaging, quality control, engineering principles, and supply chain management.",
      description2:
        "Students secure placements in leading food manufacturing companies, multinational corporations, government agencies, and emerging food startups. With India’s agro-processing expansion and export growth, placement opportunities remain strong and continuously increasing.",
      list: [
        " Food processing industries",
        "Dairy, bakery, beverage, meat, and seafood industries",
        "FMCG companies",
        "Quality control laboratories",
        "Government food inspection departments",
        "Packaging industries",
        "Cold chain and logistics companies",
        "Startups in food innovation and entrepreneurship",
      ],
      list2: [
        "Food Technologist",
        "Production Executive",
        "Quality Control Officer",
        "Process Engineer",
        "R & D Assistant",
        "Food Safety Officer",
        "Packaging Technologist",
        "Technical Officer",
      ],
    },

    "mtech-food-technology": {
      title: "Future Scope of M.Tech",
      description:
        "Students can pursue research careers, academia, or senior industry roles.",
      image: "/assets/images/programs/mtech.jpg",
    },
  };

  const data = programs[programId];

  return (
    <FutureScope
      title={data?.title}
      description={data?.description}
      description2={data?.description2}
      list={data?.list}
      list2={data?.list2}
    />
  );
};

export default FutureScopePage;

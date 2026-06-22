import React from "react";
import { useParams } from "react-router-dom";
import Eligibility from "../ProgramsMenus/Eligibility";

const EligibilityPage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      description:
        "B. Tech. / B.E. (Food Science / Food Technology) or four years equivalent degree program in Food Science / Food Technology passed with 50% marks (45% marks in case of candidate belonging to reserved category) in aggregates or its equivalent grade.",
      list: [
        "B. Tech. / B. E. (Food Science / Food Technology)",
        "Valid GATE Score or PERA CET Score",
        "Eligible students must clear the interview to get listed in the admission merit list.",
      ],
    },

    "mtech-food-technology": {
      title: "About M.Tech Programme",
      description:
        "The M.Tech programme focuses on advanced food technology research.",
    },
  };

  const data = programs[programId];

  return (
     <Eligibility
    title={data?.title}
    description={data?.description}
    list={data?.list}
  />
  )
};

export default EligibilityPage;

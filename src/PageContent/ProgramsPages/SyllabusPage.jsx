import React from "react";
import { useParams } from "react-router-dom";
import Syllabus from "../ProgramsMenus/Syllabus";

const SyllabusPage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
 
    },

    "mtech-food-technology": {
      title: "About M.Tech Programme",
      description:
        "The M.Tech programme focuses on advanced food technology research.",
    },
  };

  const data = programs[programId];

  return (
     <Syllabus
    title={data?.title}
  />
  )
};

export default SyllabusPage;

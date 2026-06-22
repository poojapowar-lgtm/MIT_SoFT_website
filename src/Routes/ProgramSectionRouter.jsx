import React from "react";
import { useParams } from "react-router-dom";
import AboutProgramPage from "../PageContent/ProgramsPages/AboutProgramPage";
import FutureScopePage from "../PageContent/ProgramsPages/FutureScopePage";
import EligibilityPage from "../PageContent/ProgramsPages/EligibilityPage";
import SyllabusPage from "../PageContent/ProgramsPages/SyllabusPage";


const ProgramSectionRouter = () => {
  const { sectionId } = useParams();

  const sections = {
    "about-programs": <AboutProgramPage />,
    "future-scope": <FutureScopePage />,
    eligibility: <EligibilityPage />,
    "syllabus-notes":<SyllabusPage/>
  };

  return sections[sectionId] || <h2>Section Not Found</h2>;
};

export default ProgramSectionRouter;

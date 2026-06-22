import React from "react";
import { useParams } from "react-router-dom";
import AboutProgram from "../ProgramsMenus/AboutProgram";

const AboutProgramPage = () => {
  const { programId } = useParams();

  const programs = {
    "btech-food-technology": {
      title: "B. Tech. (Food Technology)",
      image: "/assets/images/programs/B.Tech.jpg",
      description:
        "The B.Tech. in Food Technology is a four-year undergraduate program designed to develop technically competent professionals for the food processing and allied industries. The program focuses on the scientific principles of food processing, preservation, packaging, quality control, safety regulations, and product development. Students gain strong foundational knowledge in food chemistry, microbiology, engineering operations, nutrition, and food laws, supported by extensive laboratory work and pilot-plant exposure. The curriculum follows an industry-aligned, outcome-based",
      description2:
        "framework in accordance with NEP-2020, emphasizing experiential learning, industrial training, and real-world problem solving. Students undergo Industrial In-Plant Training (IPT), exposure visits, and project-based learning modules to ensure readiness for industry roles. The program has a minimum intake capacity of 120 students and accepts candidates through national and state-level entrance examinations. Graduates are well prepared for careers in food manufacturing, quality assurance, R&D, regulatory bodies and entrepreneurship as well as for higher education and research in food science and technology.",
      description3:
        "The B.Tech. Food Technology program plays a vital role in meeting global demands for safe, nutritious, and sustainable food. It offers an integrated understanding of food processing, quality and safety management, product innovation, nutrition, and supply chain operations. The program prepares graduates to tackle major industry challenges such as food safety assurance, reduction of post-harvest losses, regulatory compliance, and development of value-added and functional food products. With rapid growth in food processing industries, cold chain logistics, nutraceuticals, and digitalized supply chains, graduates have excellent career opportunities in industry, research, entrepreneurship, and higher education. The program contributes significantly to food security, public health, and the technological driven advancement of the agri-food sector.",
    },

    "mtech-food-technology": {
      title: "About M.Tech Programme",
      image: "/assets/images/programs/mtech.jpg",
      description:
        "The M.Tech programme focuses on advanced food technology research.",
    },
  };

  const data = programs[programId];

  return (
    <AboutProgram
      title={data?.title}
      image={data?.image}
      description={data?.description}
      description2={data?.description2}
      description3={data?.description3}
    />
  );
};

export default AboutProgramPage;

// navLinks.js
export const navMenus = [
  // Home
  {
    key: "home",
    title: "Home",
    to: "/",
  },
  // about us
  {
    key: "aboutus",
    title: "About Us",
    columns: [
      { name: "About MIT-ADT", to: "/aboutus/about-mit" },
      { name: "Leadership Message", to: "/aboutus/leadership-message" },
      { name: "About SoFT", to: "/aboutus/about-soft" },
      { name: "Principal Message", to: "/aboutus/principal-message" },
      { name: "Board of Management", to: "/aboutus/board-of-management" },
      { name: "Governing Body", to: "/aboutus/governing-body" },
    ],
  },

  //programs
  // {
  //   key: "programs",
  //   title: "Programs",
  //       columns: [
  //     { name: "B. Tech. (Food Technology)", to: "/programs/btech-food-technology" },
  //     { name: "Direct 2nd Year B. Tech. (Food Technology)", to: "/programs/direct-2nd-year-btech" },
  //     { name: "M. Tech. (Food Technology)", to: "/programs/mtech-food-technology" },
  //     { name: "M. Tech. (Food Safety & Quality Management)", to: "/programs/mtech-foodsafety" },
  //     { name: "M. Tech. (Food Technology) (Working Professional)", to: "/programs/mtech-food-technology-working-professional" },
  //     { name: "Ph. D. (Food Technology)", to: "/programs/phd-food-technology" },
  //   ],
  {
    key: "programs",
    title: "Programs",
    columns: [
      {
        name: "B. Tech. (Food Technology)",
        to: "/programs/btech-food-technology/about-programs",
      },
      {
        name: "Direct 2nd Year B. Tech.",
        to: "/programs/direct-2nd-year-btech/about-programs",
      },
      {
        name: "M. Tech. (Food Technology)",
        to: "/programs/mtech-food-technology/about-programs",
      },
      {
        name: "M. Tech. (Food Safety)",
        to: "/programs/mtech-foodsafety/about-programs",
      },
      {
        name: "M. Tech. Working Professional",
        to: "/programs/mtech-food-technology-working-professional/about-programs",
      },
      {
        name: "Ph. D. (Food Technology)",
        to: "/programs/phd-food-technology/about-programs",
      },
    ],
  },
  // columns: [
  //   { name: "About Programs", to: "/programs/about-programs" },
  //   { name: "Future Scope", to: "/programs/future-scope" },
  //   { name: "Admission Procedure", to: "/programs/admission-procedure" },
  //   { name: "Syllabus & Notes", to: "/programs/syllabus-notes" },
  //   { name: "Facilities", to: "/programs/facilities" },
  //   { name: "placements", to: "/programs/placements" },
  //   { name: "FAQ", to: "/programs/faq" },
  // ],

  //admissions
  {
    key: "admissions",
    title: "admissions",
    columns: [
      { name: "Procedure", to: "/admissions/procedure" },
      { name: "Fee Structure", to: "/admissions/fee-structure" },
      { name: "How to Apply", to: "/admissions/how-to-apply" },
      { name: "FAQ's", to: "/admissions/faq" },
      { name: "Contact Person", to: "/admissions/contact-person" },
      { name: "Scholarship Details", to: "/admissions/scholarship-details" },
      { name: "FAQ", to: "/admissions/FAQFAQFAQ" },
    ],
  },

  //research
  {
    key: "research",
    title: "research",
    columns: [
      { name: "Board of Research", to: "/research/board-of-research" },
      { name: "MOU’s", to: "/research/mou's" },
      { name: "Student Research", to: "/research/student-research" },
      { name: "Consultancy Areas", to: "/research/consultancy-areas" },
      { name: "How to apply", to: "/research/how-to-apply" },
    ],
  },

  //alumni
  {
    key: "alumni",
    title: "alumni",
    columns: [
      { name: "Alumni Report", to: "/alumni/alumni-report" },
      { name: "Alumni Success Stories", to: "/alumni/alumni-success-stories" },
    ],
  },
];

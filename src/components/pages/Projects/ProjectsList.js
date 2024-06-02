// Thesis
import thesis1 from "../../../assets/thesis/1.png";
import thesis2 from "../../../assets/thesis/2.png";
import thesis3 from "../../../assets/thesis/3.png";
import thesis4 from "../../../assets/thesis/4.png";
import thesis5 from "../../../assets/thesis/5.png";
import thesis6 from "../../../assets/thesis/6.png";
import thesis7 from "../../../assets/thesis/7.png";
import thesis8 from "../../../assets/thesis/8.png";

// Hair Donation
import photo1 from "../../../assets/hair-donation/full-capture.png";
import photo2 from "../../../assets/hair-donation/admin-full-capture.png";

// IZTECH Election
import election1 from "../../../assets/election/election-3.png";
import election2 from "../../../assets/election/election-2.png";
import election3 from "../../../assets/election/election-1.png";
import election4 from "../../../assets/election/election-4.png";

//Ambrosia
import ambrosia1 from "../../../assets/ambrosia/ambrosia1.png";
import ambrosia2 from "../../../assets/ambrosia/ambrosia3.png";
import ambrosia3 from "../../../assets/ambrosia/ambrosia4.png";
import ambrosia4 from "../../../assets/ambrosia/ambrosia5.png";
import ambrosia5 from "../../../assets/ambrosia/ambrosia6.png";
import ambrosia6 from "../../../assets/ambrosia/ambrosia2.png";
import ambrosia7 from "../../../assets/ambrosia/ambrosia7.png";

//Simon Game
import simongame from "../../../assets/simon-game.png";

const projects = [
  {
    urls: [
      thesis1,
      thesis2,
      thesis3,
      thesis4,
      thesis5,
      thesis6,
      thesis7,
      thesis8,
    ],
    title: "Pincident Lite",
    explanation:
      "Pincident Lite is a multi-tenant company management system using RABAC (role-centric attribute-based access control) in a microservice environment. It allows various companies to subscribe and customize the system according to their needs. Authorized personnel can define roles and create policies with a built-in policy editor. Also, it includes essential modules for managing the company, departments, regions, users, and more.",
    githubLink: "https://github.com/Thesis-Frontend/Frontend",
    websiteLink: "https://pincident-lite.vercel.app/",
  },
  {
    urls: [photo1, photo2],
    title: "Hair Donation Website",
    explanation:
      "A website that provides an encouraging and competitive environment for hair donation between companies. The system admin can manage the companies that donated hair. It was a work done for the contest.",
    githubLink: "https://github.com/sudenurcevik/Hair-Donation-Project",
    websiteLink: "https://hair-donation.onrender.com/",
  },
  {
    urls: [election1, election2, election3, election4],
    title: "IZTECH Election System",
    explanation:
      "An online student council election system. This is used to manage election system for our university IZTECH to automate the election process.",
    githubLink: "https://github.com/Election-System-Project/election-frontend",
    websiteLink: "https://election-6h92.onrender.com/login",
  },
  {
    urls: [
      ambrosia1,
      ambrosia2,
      ambrosia3,
      ambrosia4,
      ambrosia5,
      ambrosia6,
      ambrosia7,
    ],
    title: "Ambrosia",
    explanation:
      "Ambrosia is a restaurant website that enables customers who have allergies to choose meal with peace in mind. A customer can sign up to website by choosing the ingredients that affects them. A personalized menu is prepared for them.",
    githubLink: "https://github.com/Ambrosia-Project/ambrosia-frontend",
    websiteLink: "https://ambrosia-3rho.onrender.com/login",
  },
  {
    urls: [simongame],
    title: "Simon Game",
    explanation:
      "A classic game that tests your memory with sound effects and colorful boxes.",
    githubLink: "https://github.com/sudenurcevik/SimonGame",
    websiteLink: "https://simongame-0490.onrender.com/",
  },
];

export default { projects };

import cvPdf from "../assets/cvSofia.pdf";
import logo from "../assets/sofiaLogo.png";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Navbar = ({ language, toggleLanguage }) => {

  const handleDownloadCV = () => {
    
    const link = document.createElement("a");
    link.href = cvPdf; 
    link.download = "cvSofia.pdf";
    link.click(); 
  };
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="mr-2">
          <button
            className="rounded-lg text-sm text-purple-100 bg-neutral-500 hover:bg-neutral-600 hover:scale-105 transition duration-300 px-2 py-1"
            onClick={toggleLanguage}
          >
            {language === "es" ? "Switch to english" : "Cambiar a español"}
          </button>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <button
          className="rounded-lg text-sm text-purple-100 bg-neutral-500 hover:bg-neutral-600 hover:scale-105 transition duration-300 px-2 py-1 flex items-center"
          onClick={handleDownloadCV}
        >
        <FaFileDownload className="mr-1" />
        <span>{language === "es" ? "Descargar CV" : "Download CV"}</span>
        </button>
        <a
          href="https://www.linkedin.com/in/sof%C3%ADa-id%C3%A1rraga-549184149/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/sofia-idarraga" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

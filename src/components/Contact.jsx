import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";

export const Contact = ({ language }) => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">
        {" "}
        {language === "es" ? "Contáctame" : "Get in Touch"}
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.email}</p>
        <div className="my-4 flex flex-col items-center">        
          <a
            href="https://www.linkedin.com/in/sof%C3%ADa-id%C3%A1rraga-549184149/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

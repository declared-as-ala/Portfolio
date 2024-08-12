import heroImg from "../assets/hero.svg";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaPhoneSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I'm Ala Missaoui
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Building seamless and efficient digital experiences
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/declared-as-ala/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ala-missaoui-016a5b25a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="mailto:alamissaoui.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="tel:+21697991266"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" alt="Hero illustration" />
        </article>
      </div>
    </div>
  );
};

export default Hero;

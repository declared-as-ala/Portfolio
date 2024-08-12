import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm Ala Missaoui, a passionate Full-Stack Developer specializing in
            creating cutting-edge web and mobile solutions. With a solid
            foundation in React, React Native, NestJS, and Next.js, I build
            applications that are both powerful and user-centric, delivering
            seamless experiences across platforms.
          </p>
          <p className="text-slate-600 mt-4 leading-loose">
            My expertise extends to deploying robust CI/CD pipelines on AWS,
            ensuring that projects are efficiently managed and delivered with
            high reliability. Additionally, I have a growing interest in
            artificial intelligence and am excited about integrating AI-driven
            features into the solutions I develop.
          </p>
          <p className="text-slate-600 mt-4 leading-loose">
            Currently, I am seeking new opportunities to apply and expand my
            skills, particularly in environments that value innovation and
            continuous learning. I am eager to contribute to projects that
            challenge me and allow me to grow as a developer while making a
            significant impact.
          </p>
          <p className="text-slate-600 mt-4 leading-loose">
            Let's connect! You can reach me at{" "}
            <a
              href="mailto:alamissaoui.dev@gmail.com"
              className="text-emerald-500 hover:underline"
            >
              alamissaoui.dev@gmail.com
            </a>{" "}
            or call me at{" "}
            <a
              href="tel:+21697991266"
              className="text-emerald-500 hover:underline"
            >
              +216 97991266
            </a>
            . I'm excited to explore new opportunities and collaborate on
            innovative projects.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

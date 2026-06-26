import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // 👈 Add this import
import { HiOutlineMail } from "react-icons/hi";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Kaushal
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
              {/* 👇 Download Resume Button */}
  <a
    href="https://drive.google.com/file/d/13x-JnWuqzBewT5fB7NAgbUVX2Gd5O7Gt/view?usp=drive_link"
    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
  >
    Download Resume
  </a>
          </div>

          {/* 👇 Social Media Icons */}
          <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-400">
            <a
              href="https://github.com/kaushal4445"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/kaushal-kaushal-0265b9308"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kaushalmehra54@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <HiOutlineMail size={30} />
</a>
</div>

</div>

        
      </RevealOnScroll>
    </section>
  );
};

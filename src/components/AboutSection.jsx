import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Intro */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Full-Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-300">
              I am a passionate developer with experience building high-quality web applications using <span className="font-medium text-white">React.js, Node.js, and modern web technologies</span>. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.
            </p>
            <p className="text-gray-300">
              I bring a <span className="font-medium text-white">results-driven mindset</span>, focusing on delivering products that meet business goals and delight users. My goal is to contribute to innovative teams and create impactful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Hire Me
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-purple-500 text-white hover:bg-purple-500/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Skills / Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">Web Development</h4>
                  <p className="text-gray-300">
                    Building responsive, performant, and scalable web applications that provide intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <User className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">UI/UX Design</h4>
                  <p className="text-gray-300">
                    Crafting clean, intuitive interfaces with a focus on usability and seamless user journeys.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">Team Collaboration</h4>
                  <p className="text-gray-300">
                    Experienced in Agile workflows, collaborating with cross-functional teams, and delivering projects on time and with quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

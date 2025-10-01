import { Github, Linkedin, Mail, Code2, Brain, Server ,Briefcase} from "lucide-react";
import TypeWriter from "./TypeWriter";
import ProjectCard from "./ProjectCard";
// import ThemeToggle from "./components/ThemeToggle";
import mohsinImg from "../img/mohsin.png";
import sentimentImg from '../img/sentiment.png';
import bigmartImg from '../img/bigmart.png';

import Contact from './ContactForm'
import Timeline from "./Timeline";

function Home() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb] dark:from-gray-900 dark:to-black text-[#001f3f] dark:text-white transition-colors duration-200">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center" id="home">
          <img
            src={mohsinImg}
            alt="Mohsin Abbas"
            className="w-full mt-5 max-w-[200px] h-[200px] object-cover rounded-full mb-4 p-2 border-4 border-[#001f3f] shadow-lg"
          />

          <h1 className="text-5xl font-bold mb-4">Mohsin Abbas</h1>
          <div className="text-2xl text-[#431b85] dark:text-blue-400 mb-6">
            <TypeWriter
              words={[
                "Full Stack Developer",
                "MERN Stack Expert",
                "AI/ML Engineer"
              ]}
            />
          </div>
          <p className="text-xl text-[#001f3f] dark:text-gray-300 max-w-2xl mb-8">
            Passionate developer crafting innovative solutions with modern
            technologies. Specialized in MERN stack, Python, and AI/ML
            applications.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/mohsinakh"
              target="blank"
              className="p-3 bg-[#e0f7fa] dark:bg-gray-800 rounded-full hover:bg-[#c1e0f5] dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohsin-abbas-7252b126b/"
              target="blank"
              className="p-3 bg-[#e0f7fa] dark:bg-gray-800 rounded-full hover:bg-[#c1e0f5] dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mohsin.abb.khan@gmail.com"
              target="blank"
              className="p-3 bg-[#e0f7fa] dark:bg-gray-800 rounded-full hover:bg-[#c1e0f5] dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.fiverr.com/s/5rklvX6"
              target="blank"
              className="p-3 bg-[#e0f7fa] dark:bg-gray-800 rounded-full hover:bg-[#c1e0f5] dark:hover:bg-gray-700 transition-colors"
            >
              <Briefcase className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-[#d7e9f7] dark:bg-gray-800/50 py-20 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#ffffff] dark:bg-gray-900/50 rounded-lg text-center shadow-lg transition-colors duration-200">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-[#004080] dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">
                Frontend Development
              </h3>
              <p className="text-[#001f3f] dark:text-gray-300">
                React.js, TypeScript, Tailwind CSS, Redux
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] dark:bg-gray-900/50 rounded-lg text-center shadow-lg transition-colors duration-200">
              <Server className="w-12 h-12 mx-auto mb-4 text-[#004080] dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">
                Backend Development
              </h3>
              <p className="text-[#001f3f] dark:text-gray-300">
                Node.js, Express, Python, Django, FastApi
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] dark:bg-gray-900/50 rounded-lg text-center shadow-lg transition-colors duration-200">
              <Brain className="w-12 h-12 mx-auto mb-4 text-[#004080] dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">AI/ML</h3>
              <p className="text-[#001f3f] dark:text-gray-300">
                NLP, Sentiment Analysis, Machine Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Sentiment Sense"
              description="Advanced sentiment analysis platform analyzing YouTube comments and Reddit discussions using deep learning models through NLP."
              image={sentimentImg}
              technologies={["React.js", "Python", "NLP", "VADER"]}
              liveUrl="https://sentiment-sense.netlify.app"
            />
            <ProjectCard
              title="BigMart"
              description="Full-featured e-commerce platform with order management, cart functionality, and seller accounts."
              image={bigmartImg}
              technologies={["MERN Stack", "Redux", "bcrypt", "JWT"]}
              liveUrl="https://bigmart1.netlify.app"
            />
          </div>
        </div>
      </section>

 {/* Timeline Section */}
 <section id="timeline" className="container mx-auto px-4 pb-12">
        <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
        <Timeline />
      </section>



      {/* Contact Section */}
      <section id="contact" className="bg-[#d7e9f7] dark:bg-gray-800/50 py-20 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <Contact />
        </div>
      </section>



      {/* Footer */}
      <footer className="from-[#a1c4fd] to-[#c2e9fb] dark:bg-gray-900 py-8 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center text-[#001f3f] dark:text-gray-400">
          <p>© 2025 Mohsin Abbas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

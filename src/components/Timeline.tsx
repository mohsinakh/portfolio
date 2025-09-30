import React from 'react';
import integralImg from "../img/integral.png";
import josephImg from "../img/joseph.png";
import raygainImg from "../img/raygain.png";
import roughNoteImg from "../img/roughNote.png";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
 imgSrc: string; // custom image source instead of icon
}
const timelineData: TimelineItem[] = [
   
  {
    title: "Web Developer",
    organization: "Raygain Technologies Pvt. Ltd.",
    period: "SEP 2025 - Present",
    description: "Contributing technology to an organisation whose research and public-health work directly improves people’s lives at ICMR HQ AIIMS Delhi.",
    imgSrc: raygainImg
  }
  ,{
    title: "Backend Developer Intern",
    organization: "Rough Note Malaysia",
    period: "FEB 2025 - MAY 2025",
    description: "Contributed to multiple web development projects using HTML, CSS, JavaScript, and backend technologies.",
    imgSrc: roughNoteImg
  }
  ,{
    title: "Bachelor's in Computer Science",
    organization: "Integral University Lucknow",
    period: "AUG 2021 - JUL 2025",
    description: "Specialized in Artificial Intelligence and Machine Learning.",
    imgSrc: integralImg
  },
  {
    title: "Senior Secondary",
    organization: "St. Joseph Senior Secondary",
    period: "MAY 2019 - MAY 2021",
    description: "Focused on Mathematics and Science.",
    imgSrc: josephImg
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div key={index} className="relative pl-12">
            
            {/* Custom Image instead of icon */}
            <div className="absolute left-0 p-1 bg-white dark:bg-gray-900 rounded-full border-2 border-blue-500 dark:border-blue-400">
              <img
                src={item.imgSrc}
                alt={item.organization}
                className="w-6 h-6 rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {item.period}
                {/* {item.imgSrc} */}
              </span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <h4 className="text-gray-600 dark:text-gray-400 font-medium">
                {item.organization}
              </h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

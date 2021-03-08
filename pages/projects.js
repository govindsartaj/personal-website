import ProjectCard from "../components/ProjectCard";
import ProjectCardGrid from "../components/ProjectCardGrid";

export default function Projects({ darkMode }) {
  return (
    <div className="h-screen dark:bg-darkbg">
      <div className="px-4 pt-16 mx-auto text-gray-900 dark:bg-darkbg max-w-7xl sm:px-6 lg:px-8 dark:text-white">
        <ProjectCardGrid>
          <ProjectCard
            src="/clean-notes.png"
            title="Clean Notes"
            body="An aesthetically-pleasing, cloud-based note-taking experience built with React + Node.js + Express.js + MongoDB."
            tags={["React", "Node.js", "Express.js", "MongoDB", "MaterialUI"]}
            link='https://github.com/govindsartaj/clean-notes'
          />
          <ProjectCard
            src="/rate-my-grinnell-profs.png"
            title="RateMyGrinnellProfs"
            body="A Google Chrome extension to view Grinnell College professor reviews right on a course page on WebAdvisor."
            tags={[
              "JavaScript",
              "Python",
              "AWS Lambda",
              "HTML",
              "CSS",
              "Chrome Extension",
            ]}
            link='https://chrome.google.com/webstore/detail/ratemygrinnellprofs/hedepbjdfnecajkldjeciolmpjfndkhm'
          />
          <ProjectCard
            src="/click-the-bar.png"
            title="Click The Bar"
            body="A Google Chrome extension that clicks on the YouTube search bar automatically. For lazy people, like me."
            tags={["JavaScript", "jQuery", "HTML", "CSS", "Chrome Extension"]}
            link='https://github.com/govindsartaj/click-the-bar'
          />
        </ProjectCardGrid>
      </div>
    </div>
  );
}

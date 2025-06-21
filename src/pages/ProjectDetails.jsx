import React from "react";
import { ListofProjectDetails } from "../utils/mockData";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const ProjectDetails = () => {
  const { workId } = useParams();
  const projectInfo = ListofProjectDetails[workId];

  if (!projectInfo) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <div>
      <Header />
      <div>
        {/* Name & Subtitle */}
        <div className="text-7xl font-semibold leading-5">
          <h1>{projectInfo.name}</h1>
        </div>
        <div className="text-3xl font-normal mt-16 mb-10 leading-[140%]">
          <h3>{projectInfo.subtitle}</h3>
        </div>

        {/* Paragraphs */}
        <div className="text-[#333333] font-light text-[1.375rem] leading-[160%]">
          {projectInfo.paragraph.map((para, index) => (
            <p key={index} className="mb-10">
              {para}
            </p>
          ))}
        </div>

        {/* Links */}
        {projectInfo.links && (
          <div className="mb-10 text-[#333333] leading-[160%] text-[1.375rem] font-light">
            {Object.entries(projectInfo.links).map(([key, url]) => (
              <div key={key}>
                <a
                  href={url}
                  className="mb-2 text-[#111111] font-normal hover:underline"
                >
                  {projectInfo.name} on {key}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Roles */}
        <div>
          <h2 className="font-medium text-[2.75rem] mt-16 mb-10 leading-[120%]">
            My Roles
          </h2>
          {projectInfo.role && (
            <>
              <div className="text-2xl leading-[120%] mb-2">
                {projectInfo.role.subtitle}
              </div>
              <ul className="list-disc mx-9 mb-10 space-y-2">
                {projectInfo.role.roles.map((rolePara, index) => (
                  <li
                    key={index}
                    className="leading-[160%] text-[#333333] font-light text-[1.375rem]"
                  >
                    {" "}
                    {rolePara}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Challenges & Solutions */}
        <div>
          <h2 className="font-medium text-[2.75rem] leading-[120%] mt-16 mb-10">
            Challenges & Solutions
          </h2>

          {projectInfo.challengesSolutions.map((cs, index) => (
            <p
              key={index}
              className="leading-[160%] text-[#333333] mb-10 font-light text-[1.375rem]"
            >
              <span className="font-medium">{cs.challenge}</span>
              <br /> <span>{cs.solution}</span>
            </p>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="font-medium text-[2.75rem] leading-[120%] mt-16 mb-10">
            Tech Stack
          </h2>
          <p className="leading-[160%] text-[#333333] mb-10 font-light text-[1.375rem]">
            {projectInfo.techStack.join(", ")}
          </p>
        </div>

        {/* Screenshots & Videos */}

        <div className="space-y-4">
          {projectInfo.screenshots.map((src, index) => {
            const isMobile = src.includes("Mobile");

            if (isMobile) return null; // We'll render mobile screenshots separately
            return (
              <div key={index} className="p-2">
                <img
                  src={src}
                  alt={`desktop-screenshot-${index}`}
                  className="w-full rounded shadow object-contain"
                />
              </div>
            );
          })}

          {/* MOBILE SCREENSHOTS */}
          <div className="hidden md:flex overflow-x-auto space-x-4 py-4">
            {projectInfo.screenshots.map((src, index) => {
              const isMobile = src.includes("Mobile");
              if (!isMobile) return null;

              return (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={src}
                    alt={`mobile-screenshot-${index}`}
                    className="max-w-[250px] rounded shadow object-contain"
                  />
                </div>
              );
            })}
          </div>

          {/* On mobile view: stack mobile screenshots vertically */}
          <div className="md:hidden space-y-4">
            {projectInfo.screenshots.map((src, index) => {
              const isMobile = src.includes("Mobile");
              if (!isMobile) return null;

              return (
                <div key={index} className="p-2">
                  <img
                    src={src}
                    alt={`mobile-screenshot-${index}`}
                    className="max-w-[250px] mx-auto rounded shadow object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Output */}
        <div>
          <h2 className="font-medium text-[2.75rem] leading-[120%] mt-16 mb-10">
            Output
          </h2>
          <p className="leading-[160%] text-[#333333] mb-10 font-light text-[1.375rem]">
            {projectInfo.output}
          </p>
        </div>

        {/* back to works link */}
        <div className="max-w-7xl text-center mt-[20vh] mb-[40vh] mx-auto">
          <Link
            to={"/"}
            className="text-center font-semibold text-4xl leading-[140%] hover:underline"
          >
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

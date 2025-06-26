import React from "react";
import { ListofProjectDetails } from "../utils/mockData";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const ProjectDetails = () => {
  const { workId } = useParams();
  const projectInfo = ListofProjectDetails[workId];

  const headerRef = useRef(null);
  const projectTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);
  const linksRef = useRef(null);
  const rolesRef = useRef(null);
  const challengeRef = useRef(null);
  const stackRef = useRef(null);
  const screenshotRef = useRef(null);
  const outputRef = useRef(null);
  const backLinkRef = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  useLayoutEffect(() => {
    if (!hasAnimated) {
      const tl = gsap.timeline();

      tl.to(headerRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.out",
      }).to(
        [
          projectTitleRef.current,
          subtitleRef.current,
          paraRef.current,
          linksRef.current,
          rolesRef.current,
          challengeRef.current,
          stackRef.current,
          screenshotRef.current,
          outputRef.current,
          backLinkRef.current,
        ],
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=1"
      );

      setHasAnimated(true);
    }
  }, [hasAnimated]);

  if (!projectInfo) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <div>
      <Header
        ref={headerRef}
        style={{ opacity: 0, transform: "translateY(40px)" }}
      />

      <div className="grid lg:grid-cols-12 sm:grid-cols-1 pb-[16vh]">
        <div className="col-start-2 col-end-12">
          {/* Name */}
          <div
            className="section-title text-primary"
            ref={projectTitleRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h1>{projectInfo.name}</h1>
          </div>

          {/* Subtitle  */}
          <div
            className="section-heading text-primary mt-16 mb-10"
            ref={subtitleRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h3>{projectInfo.subtitle}</h3>
          </div>

          {/* Paragraphs */}
          <div
            className="section-paragraph text-secondary"
            ref={paraRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            {projectInfo.paragraph.map((para, index) => (
              <p key={index} className="mb-10">
                {para}
              </p>
            ))}
          </div>

          {/* Links */}
          {projectInfo.links && (
            <div
              className="mb-10"
              ref={linksRef}
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              {Object.entries(projectInfo.links).map(([key, url]) => (
                <div key={key}>
                  <a href={url} className="project-link">
                    {projectInfo.name} on {key}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Roles */}
          <div
            ref={rolesRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h2 className="section-heading">My Roles</h2>
            {projectInfo.role && (
              <>
                <div className="section-subheading">
                  {projectInfo.role.subtitle}
                </div>
                <ul className="section-list text-secondary">
                  {projectInfo.role.roles.map((rolePara, index) => (
                    <li key={index}> {rolePara}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Challenges & Solutions */}
          <div
            ref={challengeRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h2 className="section-heading">Challenges & Solutions</h2>

            {projectInfo.challengesSolutions.map((cs, index) => (
              <p key={index} className="section-paragraph text-secondary">
                <span className="font-medium">{cs.challenge}</span>
                <br /> <span>{cs.solution}</span>
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div
            ref={stackRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h2 className="section-heading">Tech Stack</h2>
            <p className="section-output">{projectInfo.techStack.join(", ")}</p>
          </div>

          {/* Screenshots & Videos */}

          <div
            className="space-y-4"
            ref={screenshotRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            {projectInfo.screenshots.map((src, index) => {
              const isMobile = src.includes("Mobile");

              if (isMobile) return null; // We'll render mobile screenshots separately
              return (
                <div key={index} className="p-2">
                  <img
                    src={src}
                    alt={`desktop-screenshot-${index}`}
                    className="screenshot-img"
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
                      className="screenshot-mobile"
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
                      className="screenshot-mobile mx-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h2 className="section-heading text-primary">Output</h2>
            <p className="section-output text-secondary">
              {projectInfo.output}
            </p>
          </div>

          {/* back to works link */}
          <div
            className="max-w-7xl text-center mt-[20vh] mb-[40vh] mx-auto"
            ref={backLinkRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <Link
              to={"/"}
              className="text-center font-semibold text-4xl leading-[140%] hover:underline"
            >
              Back to all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

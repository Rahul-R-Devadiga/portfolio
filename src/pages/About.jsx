import React from "react";
import Header from "../components/Header";
import { aboutPageData, links } from "../utils/mockData";
import { useRef } from "react";
import useAnimateSequence from "../hooks/useAnimateSequence";

const About = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const disciplinesRef = useRef(null);
  const contactRef = useRef(null);

  useAnimateSequence(
    [
      headerRef,
      titleRef,
      paraRef,
      experienceRef,
      educationRef,
      disciplinesRef,
      contactRef,
    ],
    []
  );

  return (
    <div>
      {" "}
      <Header
        ref={headerRef}
        style={{ opacity: 0, transform: "translateY(40px)" }}
      />
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 pb-[16vh]">
        <div className="col-start-3 col-end-12">
          {/* title */}
          <h2
            className="text-primary section-title"
            ref={titleRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            {aboutPageData.title}
          </h2>

          {/* Paragraph */}
          <div
            ref={paraRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            {aboutPageData.paragraph.map((para, index) => (
              <p key={index} className="section-paragraph text-secondary">
                {para}
              </p>
            ))}
          </div>

          {/* Work Experience */}
          <div
            ref={experienceRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h4 className="section-heading text-primary">Work Experiences</h4>
            <div className="grid lg:grid-cols-2">
              {aboutPageData.experiences.map((exp, index) => (
                <div key={index} className="mb-5 flex flex-col">
                  <p className="text-primary font-normal text-xl leading-[160%]">
                    {" "}
                    {exp.role}{" "}
                  </p>
                  <p className="section-subtext text-secondary">
                    {" "}
                    {exp.employer}{" "}
                  </p>
                  <p className="text-tertiary font-light text-base leading-[160%]">
                    {" "}
                    {exp.years}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            ref={educationRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h4 className="section-heading text-primary">Educations</h4>
            <div>
              {aboutPageData.educations.map((edu, index) => (
                <div key={index} className="mb-5 flex flex-col">
                  <p className="text-primary font-normal text-xl leading-[160%]">
                    {" "}
                    {edu.course}{" "}
                  </p>
                  <p className="section-subtext text-secondary">
                    {" "}
                    {edu.college}{" "}
                  </p>
                  <p className="text-tertiary font-light text-base leading-[160%]">
                    {" "}
                    {edu.years}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disciplines */}
          <div
            ref={disciplinesRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h4 className="section-heading text-primary">Disciplines</h4>
            <div className="grid lg:grid-cols-2 gap-y-1">
              {aboutPageData.disciplines.map((discipline, index) => (
                <p key={index} className="section-paragraph mb-2">
                  {discipline}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            ref={contactRef}
            style={{ opacity: 0, transform: "translateY(40px)" }}
          >
            <h4 className="section-heading text-primary">Contact</h4>
            <p className="section-paragraph text-secondary">
              Feel free to reach out for projects, collaborations, or just to
              say hello! Currently seeking new opportunities.
            </p>
            <div className="felx flex-col mt-10 mb-5">
              <a
                href="mailto:devadigarahul06@gmail.com"
                className="section-link"
              >
                devadigarahul06@gmail.com
              </a>
              <br />
              {Object.entries(links).map(([key, value]) => (
                <a href={value} key={key} className="section-link">
                  {key}
                  <br />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Header from "../components/Header";
import { aboutPageData, links } from "../utils/mockData";

const About = () => {
  // console.log(aboutPageData);
  return (
    <div>
      {" "}
      <Header />
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 pb-[16vh]">
        <div className="col-start-3 col-end-12">
          {/* title */}
          <h2 className="text-[#111111] leading-[120%] font-medium text-[2.75rem] mt-16 mb-10">
            {aboutPageData.title}
          </h2>

          {/* Paragraph */}
          <div>
            {aboutPageData.paragraph.map((para, index) => (
              <p
                key={index}
                className="text-[#333333] font-light leading-[160%] mb-10 text-[1.375rem] "
              >
                {para}
              </p>
            ))}
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-[#111111] font-medium text-[2rem] mt-20 mb-5 leading-[140%]">
              Work Experiences
            </h4>
            <div className="grid grid-cols-2">
              {aboutPageData.experiences.map((exp, index) => (
                <div key={index} className="mb-5 flex flex-col">
                  <p className="text-[#111111] leading-[160%] font-normal text-[1.375rem]">
                    {" "}
                    {exp.role}{" "}
                  </p>
                  <p className="text-[1.1rem] text-[#333333] leading-[160%] font-light">
                    {" "}
                    {exp.employer}{" "}
                  </p>
                  <p className="text-[#666666] font-light text-[1rem] leading-[160%]">
                    {" "}
                    {exp.years}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-[#111111] font-medium text-[2rem] mt-20 mb-5 leading-[140%]">
              Educations
            </h4>
            <div className="">
              {aboutPageData.educations.map((edu, index) => (
                <div key={index} className="mb-5 flex flex-col">
                  <p className="text-[#111111] leading-[160%] font-normal text-[1.375rem]">
                    {" "}
                    {edu.course}{" "}
                  </p>
                  <p className="text-[1.1rem] text-[#333333] leading-[160%] font-light">
                    {" "}
                    {edu.college}{" "}
                  </p>
                  <p className="text-[#666666] font-light text-[1rem] leading-[160%]">
                    {" "}
                    {edu.years}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="text-[#111111] font-medium text-[2rem] mt-20 mb-5 leading-[140%]">
              Disciplines
            </h4>
            <div className="grid grid-cols-2 gap-y-1">
              {aboutPageData.disciplines.map((discipline, index) => (
                <p
                  key={index}
                  className="leading-[160%] text-[#333333] font-light text-[1.375rem]"
                >
                  {discipline}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#111111] font-medium text-[2rem] mt-20 mb-5 leading-[140%]">
              Contact
            </h4>
            <p className="text-[1.375rem] font-light text-[#333333] leading-[160%]">
              Feel free to reach out for projects, collaborations, or just to
              say hello! Currently seeking new opportunities.
            </p>
            <div className="felx flex-col mt-10 mb-5">
              <a
                href="mailto:devadigarahul06@gmail.com"
                className="hover:underline leading-[160%] text-[#111111] font-normal text-[1.375rem]"
              >
                devadigarahul06@gmail.com
              </a>
              <br />
              {Object.entries(links).map(([key, value]) => (
                <a
                  href={value}
                  key={key}
                  className="hover:underline leading-[160%] text-[#111111] font-normal text-[1.375rem]"
                >
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

import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProjectContainer from "../components/ProjectContainer";
import { landingPageData } from "../utils/mockData";

const Works = () => {
  return (
    <div className="relative">
      <Header />
      
      <div className="mt-5">
        <div className="lg:text-7xl font-semibold leading-[120%] text-balance text-3xl">
          {landingPageData.title}
        </div>

        <div>
          <ProjectContainer />
        </div>

        <div className="text-[1.375rem] font-light text-[#333333]">
          {landingPageData.shortAboutMe}
        </div>

        <div className="text-[1.375rem] font-medium pt-8 hover:underline">
          <Link to={"/about"}>More about me</Link>
        </div>

        <div className="my-8">
          <p className="text-[#333333] font-light text-[1.375rem]">
            Get in touch{" "}
            <span className="text-[#666666]"> (Click to mail) </span>{" "}
          </p>

          <div className="text-4xl font-semibold cursor-pointer">
            {" "}
            <a href="mailto:devadigarahul06@gmail.com">
              {" "}
              devadigarahul06@gmail.com{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

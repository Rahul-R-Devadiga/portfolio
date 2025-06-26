import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProjectContainer from "../components/ProjectContainer";
import { landingPageData } from "../utils/mockData";
import { useRef } from "react";
import useAnimateSequence from "../hooks/useAnimateSequence";

const Works = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const projectGridRef = useRef(null);
  const aboutRef = useRef(null);
  const linkRef = useRef(null);
  const contactRef = useRef(null);
  //   if (!hasAnimated) {
  //     const tl = gsap.timeline();

  //     tl.to(headerRef.current, {
  //       y: 0,
  //       autoAlpha: 1,
  //       duration: 1.2,
  //       ease: "power2.out",
  //     }).to(
  //       [
  //         titleRef.current,
  //         projectGridRef.current,
  //         aboutRef.current,
  //         linkRef.current,
  //         contactRef.current,
  //       ],
  //       {
  //         y: 0,
  //         autoAlpha: 1,
  //         duration: 1.2,
  //         ease: "power2.out",
  //         stagger: 0.15, // slight delay between each
  //       },
  //       "-=1.0" // overlap start with previous
  //     );
  //     setHasAnimated(true);
  //   }
  // }, [hasAnimated]);

  useAnimateSequence(
    [headerRef, titleRef, projectGridRef, aboutRef, linkRef, contactRef],
    []
  );

  return (
    <div className="relative">
      <Header
        ref={headerRef}
        style={{ opacity: 0, transform: "translateY(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-0 pb-20">
        {/* title */}
        <div
          className="section-title text-primary"
          ref={titleRef}
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          {" "}
          {landingPageData.title}{" "}
        </div>

        {/* Project Grid */}
        <div
          className="mt-10"
          ref={projectGridRef}
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <ProjectContainer />
        </div>

        {/* Short About Me */}
        <div
          className="section-paragraph text-secondary pt-10"
          ref={aboutRef}
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          {landingPageData.shortAboutMe}
        </div>

        {/* More about me link */}
        <div
          ref={linkRef}
          className=" text-xl sm:text-[1.375rem] font-medium pt-8 hover:underline"
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <Link to={"/about"}>More about me</Link>
        </div>

        {/* Contact Section */}
        <div
          className="my-8"
          ref={contactRef}
          style={{ opacity: 0, transform: "translateY(40px)" }}
        >
          <p className="text-secondary section-paragraph">
            Get in touch{" "}
            <span className="text-tertiary"> (Click to mail) </span>{" "}
          </p>

          <div className="text-3xl sm:text-4xl font-semibold cursor-pointer text-primary hover:underline">
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

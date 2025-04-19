import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "5" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "mothish.pdf";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hi, I’m Mothish Raj, a MERN Full Stack Developer passionate about building modern, scalable, and user-centric web applications. With hands-on experience in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting full-stack solutions that bridge design and functionality.

I began my journey in tech with a BCA from the University of Madras, followed by an MCA from Dr. M.G.R. Educational and Research Institute. During my 6-month tenure at Why Global Services, I worked on real-world web applications, honed my skills in RESTful API development, front-end performance optimization, and integrated tools like Redux and Firebase.

My recent project—a full-stack crowdfunding platform—demonstrates my ability to build secure, responsive applications from scratch. I’m also deeply interested in tech-driven solutions for social impact, as reflected in my earlier project on mental health identification using facial expressions.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

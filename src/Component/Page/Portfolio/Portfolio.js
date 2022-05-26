import React from "react";
import banner from "../../Assets/Images/119612-.jpg";

const Portfolio = () => {
  return (
    <div>
      <div className="hero h-[40vh] bg-about bg-fixed mt-16 opacity-90">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-primary">My Portfolio</h1>
          </div>
        </div>
      </div>
      <div className="hero lg:h-[80vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Amirul Islam Tajbid
            </h1>
            <div>
              <p className="py-6 max-w-3xl">
                Recent CSE Graduate with experience of 5 months web development.
                Seeking to use my backend development experience in an entry
                level position to find a job.
              </p>
              <a
                href="https://drive.google.com/file/d/1t123MMDKqpEApFH5AjWMmOVFi2bAHMtc/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary "
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={banner} className="h-full" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <div className="card w-96 bg-neutral text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Phone: +880 17781 20603</h2>
              <h2 className="card-title">Address:36 Chandanpura, Chittagong</h2>
              <h4 className="">
                LinkedIn: https://www.linkedin.com/in/amirul-islam-94a980178/
              </h4>
            </div>
          </div>
          <div className="card w-96 bg-neutral text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                GitHub: https://github.com/Bl4ckSlayer
              </h2>
              <h4 className="">Email: amirulislamtajbid@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <div className="card w-96 bg-neutral text-white">
            <div className="card-body items-center text-center">
              <h4 className="">
                HTML5, Bootstrap5,Tailwind CSS, Firebase(Authentication),React
                Router
              </h4>
            </div>
          </div>
          <div className="card w-96 bg-neutral text-white">
            <div className="card-body items-center text-center">
              <h4 className="">
                CSS3, JavaScript(ES6), React JS, Context API, PHP, MySQL,
                MongoDB
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 mb-16">
          <input
            className="textarea text-center"
            value="2018 - 2022"
            disabled
          />
          <input
            className="textarea"
            value="Bachelor of Science: Computer Science & Engineering"
            disabled
          />
          <input
            className="textarea"
            value="International Islamic University Chittagong"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

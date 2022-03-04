const Projects = () => {
  return (
    <div className="w-full pt-36 px-5 md:px-10 min-h-screen bg-gradient-to-t from-biru-0 to-abutua-0 text-white text-center">
      <h2 className="font-semibold text-body-0 text-3xl tracking-widest">
        My Projects
      </h2>
      <div className="px-10 md:px-20 grid md:grid-cols-2 gap-10 mt-16 pb-36 md:pb-0">
        <div className="card p-3 bg-abutua-0 text-putih-0 flex rounded-lg hover:rotate-[-3deg] hover:scale-110 ease-in-out transition-all duration-200">
          <img
            src="https://res.cloudinary.com/duohdrpvb/image/upload/c_scale,w_100/v1646407361/sabdahtb/codee_uhucd8.png"
            alt=""
          />
          <div className="py-6 text-left mx-2">
            <p className="text-white text-xl font-semibold">
              Rest API NodeJS and MongoDB
            </p>
            <p className="italic my-4">
              In this repository i build REST-API with Node JS and MongoDB. For
              the Frameworks i use Express JS and i use EJS for the view-engine.
            </p>
            <a
              href="https://github.com/sabdahtb/REST-API-WITH-NODE.JS"
              className="italic font-semibold text-emas-0"
            >
              View Repository
            </a>
          </div>
        </div>

        <div className="card p-3 bg-abutua-0 text-putih-0 flex rounded-lg hover:rotate-[-3deg] hover:scale-110 ease-in-out transition-all duration-200">
          <img
            src="https://res.cloudinary.com/duohdrpvb/image/upload/c_scale,w_100/v1646407361/sabdahtb/codee_uhucd8.png"
            alt=""
          />
          <div className="py-6 text-left mx-2">
            <p className="text-white text-xl font-semibold">
              MERN Stack Web Application
            </p>
            <p className="italic my-4">
              Full Stack Web Application with React JS, Node JS, Express JS and
              Mongo DB what most people call it MERN Stack Application.
            </p>
            <a
              href="https://github.com/sabdahtb/year-end-mern-project"
              className="italic font-semibold text-emas-0"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

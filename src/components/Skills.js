const skills = [
  {
    nama: "html",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/html5_zyp2f6.png",
  },
  {
    nama: "php",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/c_scale,w_48/v1646282353/sabdahtb/php_zrozsw.png",
  },
  {
    nama: "css",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/css3_uumsxq.png",
  },
  {
    nama: "bootstrap",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/bootstrap_nnybzg.png",
  },
  {
    nama: "tailwind",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/c_scale,h_48,w_48/v1646282353/sabdahtb/tailwindcss_vy7xdz.png",
  },
  {
    nama: "sass",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/sass_dnfezn.png",
  },
  {
    nama: "js",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/javascript_ikuzdv.png",
  },
  {
    nama: "node",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/nodejs_volvfq.png",
  },
  {
    nama: "react",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/reactjs_vosjjb.png",
  },
  {
    nama: "mongo",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/mongo_tkhvvm.png",
  },
  {
    nama: "mysql",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/mysql_pri114.png",
  },
  {
    nama: "git",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/git_sl1kvq.png",
  },
];

const learns = [
  {
    nama: "next",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/c_scale,w_48/v1646287122/sabdahtb/next-js_mwjkpg.png",
  },
  {
    nama: "laravel",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646286881/sabdahtb/laravel_lhjvjr.png",
  },
  {
    nama: "figma",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282352/sabdahtb/figma_dhwnsr.png",
  },
  {
    nama: "ts",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/typescript_ltqtuk.png",
  },
  {
    nama: "py",
    link: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646282353/sabdahtb/python_nqup20.png",
  },
];

const Skills = () => {
  return (
    <div className="w-full pt-36 px-5 md:px-10 min-h-screen bg-gradient-to-t from-biru-0 to-abutua-0 text-white text-center">
      <h2 className="font-semibold text-body-0 text-3xl tracking-widest">
        My skills
      </h2>
      <div className="skills mt-10 md:mt-16 w-full md:px-20 grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-16 justify-self-center place-items-center">
        {skills.map((skill) => (
          <div key={skill.nama}>
            <img
              src={skill.link}
              alt=""
              className="hover:rotate-[360deg] hover:scale-110 transition-all ease-in-out duration-500"
            />
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-body-0 text-3xl tracking-widest mt-16">
        Learnings
      </h2>
      <div className="skills mt-10 md:mt-16 w-full md:px-20 grid grid-cols-5 gap-10 justify-self-center place-items-center pb-36  md:pb-0">
        {learns.map((skill) => (
          <div key={skill.nama} className="bg-none">
            <img
              src={skill.link}
              alt=""
              className="hover:rotate-[360deg] hover:scale-110 transition-all ease-in-out duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

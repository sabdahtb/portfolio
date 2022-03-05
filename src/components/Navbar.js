import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "About Me", link: "/" },
    { name: "My Skills", link: "/skills" },
    { name: "My Projects", link: "/projects" },
  ];

  let navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full px-5 md:px-10 py-5 text-white bg-hitam-0 fixed top-0 left-0">
      <div className="md:flex justify-between items-center">
        <img
          src="https://res.cloudinary.com/duohdrpvb/image/upload/v1646447595/sabdahtb/sabdalogo_fjiwcf.png"
          alt=""
          height={"30"}
          width={"120"}
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        <div>
          <img
            src="https://res.cloudinary.com/duohdrpvb/image/upload/v1646447606/sabdahtb/menu_o5mrfz.png"
            alt=""
            height={"20"}
            width={"20"}
            className="absolute top-8 right-10 cursor-pointer md:hidden"
            onClick={() => setMenu(!menu)}
          />
        </div>
        <ul className={`md:flex py-5 md:py-0 ${menu ? "block" : "hidden"}`}>
          {links.map((link) => (
            <li
              key={link.name}
              className="mx-3 font-body text-sm tracking-wider py-5 md:py-0 border-b-2 border-abumuda-0 md:border-0"
            >
              <Link
                to={link.link}
                className="hover:underline underline-offset-4"
                onClick={() => setMenu(!menu)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

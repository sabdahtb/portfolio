const Footer = () => {
  return (
    <div className="px-5 md:px-10 pt-4 pb-10 bg-abumuda-0">
      <img src="/img/sabdalogo.png" alt="" height={"20"} width={"80"} />
      <p className="font-semibold text-xl text-emas-0 mt-1">Contact Me</p>
      <div className="text-sm text-putih-0 font-body tracking-wide">
        <p className="my-1">
          <a
            href="https://www.instagram.com/sabdahtb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emas-0"
          >
            Instagram
          </a>
        </p>
        <p className="my-1">
          <a
            href="https://www.linkedin.com/in/sabda-barat-3a3254215/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emas-0"
          >
            LinkedIn
          </a>
        </p>
        <p className="my-1">North Sumatera, Indonesia (2002)</p>
      </div>
    </div>
  );
};

export default Footer;

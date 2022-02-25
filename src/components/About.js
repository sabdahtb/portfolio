const About = () => {
  return (
    <div className="w-full pt-36 px-5 md:px-10 min-h-screen bg-gradient-to-t from-biru-0 to-abutua-0 text-white text-center">
      <div className="w-full flex justify-center">
        <img
          src="/img/sabda.png"
          alt=""
          height={"300"}
          width={"300"}
          className="rounded-full border-4 border-white object-cover"
        />
      </div>
      <div className="mt-10 font-body text-base italic text-body-0 tracking-wider">
        <p>
          <span className="text-white font-semibold tracking-widest">
            Wellcome Everyone,{" "}
          </span>
          My name is Sabda Perdana Hutabarat.
        </p>
        <p>I able to think, design, code, and sleep.</p>
        <p>I Love to learn something new. I was born in April 2001.</p>
        <p>
          Learned as a Programmer since July 2021, I already compleete many
          Projects.
        </p>
        <p>VSCode, StackOverflow, and my Notebook are my beloved friends.</p>
      </div>
    </div>
  );
};

export default About;

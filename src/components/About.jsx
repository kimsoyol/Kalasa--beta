import aboutImg from "../assets/AboutUs.png";

const About = () => {
  return (
    <section className="flex">
      <div className="container basis-1/2 text-Brown px-20 py-44 bg-Eggshell">
        <p className="font-serif font-bold text-5xl pb-10">What is Kalasa?</p>
        <span className="leading-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores consequatur exercitationem soluta nobis! Eaque sed, quam inventore, iusto dolorum, voluptatum repudiandae labore laborum ducimus autem ut sint rerum magnam non.
        </span>
      </div>
      <div className="basis-1/2">
        <img src={aboutImg} alt="about us image" />
      </div>
    </section>
  );
};
export default About;

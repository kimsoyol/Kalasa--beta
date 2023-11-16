const Hero = () => {
  return (
    <section className="bg-Black relative">
      <img src="src/assets/GalleryBG.png" alt="" className="opacity-20 w-full" />
      <div className="text-center absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">
        <p className="font-bold text-[88px] text-White font-serif">
          Kalasa Art Space
        </p>
        <p className="font-bold text-5xl text-cream font-serif pt-10 w-max">
          A Space where there is Heart, there is Art
        </p>
        <p className="text-White pt-10">
          We need to work then give time for Heart. If you would love to feed
          your soul and heart, don’t forget to visit Kalasa Art. You can enjoy
          various art works for your soul and fresh healthy juice for your body
          here. Don’t miss it out, my dear all. We open daily 9:30 Am to 9:00 Pm
          daily.
        </p>
        <div className="pt-10 flex gap-4 justify-center">
          <button className="cta-btn">Upcoming Exhibitions</button>
          <button className="cta-btn">Learn More →</button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

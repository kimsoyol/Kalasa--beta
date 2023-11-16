const Hero = () => {
  return (
    <div className="bg-Black w-full h-full bg-[url('src/assets/GalleryBG.png')]">
      <img alt="" className="opacity-20 w-full object-cover h-full" />
      <div className="text-center mt-40 sm:mt-0">
        <p className="font-bold text-3xl sm:text-[88px] text-White font-serif">
          Kalasa Art Space
        </p>
        <p className="font-bold text-lg sm:text-5xl text-cream font-serif pt-3 sm:pt-10 w-max">
          A Space where there is Heart, there is Art
        </p>
        <p className="text-White pt-3 sm:pt-10 text-sm sm:text-xl">
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
    </div>
  );
};
export default Hero;

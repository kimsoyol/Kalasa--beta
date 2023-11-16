import { useSelector } from "react-redux";

const Collection = () => {
  const collections = useSelector((state) => state.collection.collections);

  const items = collections.map((item, index) => {
    const isIndex034 = [0, 3, 4].includes(index);

    return { item, isIndex034};
  });

  return (
    <section className="px-20 py-32">
      <div className="text-Brown flex justify-center sm:justify-between">
        <p className="font-bold text-xl md:text-5xl font-serif">Explore Our Collections</p>
        <button className="hidden md:block border-[1.5px] font-medium font-serif text-lg px-9 py-4">
        View All Collection →
        </button>
        <button className="block md:hidden">
          See all
        </button>
      </div>
      <div className=" pt-20 flex flex-wrap items-start flex-col h-[700px] md:h-[] sm:h-[1100px] gap-3 content-evenly">
        {items.map(({ item, isIndex034 }) => (
          <div
            key={item.id}
            className={`${
              isIndex034 ? "h-[161px] sm:h-[393px]" : "h-[213px] sm:h-[593px]"
            } border border-[#883B0A29] p-2 w-[160px] sm:w-[437px]`}
          >
            <img src={item.img} alt="" className="w-full h-5/6 object-cover" />
            <div className="h-1/6 relative">
              <p className="font-semibold text-Brown text-xs sm:text-2xl sm:absolute sm:top-1/2 sm:left-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] pt-2 sm:pt-0">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

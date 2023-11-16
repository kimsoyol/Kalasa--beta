import { useSelector } from "react-redux";

const Collection = () => {
  const collections = useSelector((state) => state.collection.collections);

  const items = collections.map((item, index) => {
    const isIndex034 = [0, 3, 4].includes(index);
    const isIndex125 = [1, 2, 5].includes(index);

    return { item, isIndex034, isIndex125 };
  });

  return (
    <section className="px-20 py-32">
      <div className="text-Brown flex justify-between">
        <p className="font-bold text-5xl font-serif">Explore Our Collection</p>
        <button className="border-[1.5px] font-medium font-serif text-lg px-9 py-4">
          View All Collection →
        </button>
      </div>
      <div className=" pt-20 flex flex-wrap items-start flex-col h-[1100px]   gap-3 content-evenly">
        {items.map(({ item, isIndex034 }) => (
          <div
            key={item.id}
            className={`${
              isIndex034 ? "h-[393px]" : "h-[593px]"
            } border border-[#883B0A29] p-2 w-[437px]`}
          >
            <img src={item.img} alt="" className="w-full h-5/6 object-cover" />
            <div className="h-1/6 relative">
              <p className="font-semibold text-2xl text-Brown absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
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

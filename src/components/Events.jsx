import { useSelector } from "react-redux";

const Events = () => {
  const events = useSelector((state) => state.event.events);

  return (
    <section className="px-20 py-32">
      <div className="text-Brown flex justify-between">
        <p className="font-bold text-5xl font-serif">Upcoming Events</p>
        <button className="border-[1.5px] font-medium font-serif text-lg px-9 py-4">
          View All Exhibitions →
        </button>
      </div>
      <div className="flex gap-5 pt-20 justify-evenly flex-wrap text-Brown">
        {events.map((event) => (
          <div
            key={event.id}
            className="border-solid border-[1.5px] border-[#883B0A29] p-2 h-[624px]"
          >
            <img
              className="w-[421px] h-[421px] pb-8"
              src={event.img}
              alt="event poster"
            />
            <p className="pb-8 font-semibold text-2xl pl-3">{event.title}</p>
            <div className="flex justify-between p-3">
              <div>
                <p className="">{event.date}</p>
                <p>{event.location}</p>
              </div>
              <button className="border-solid border-[1.5px] border-Brown py-3 px-7">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Events;

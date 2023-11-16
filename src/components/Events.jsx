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
      <div className="flex gap-5 pt-20 justify-evenly flex-wrap">
        {events.map((event) => (
          <div key={event.id} className="border-solid border-[1.5px] border-Brown p-2 h-[624px]">
            <img
              className="w-[421px] h-[421px]"
              src={event.img}
              alt="event poster"
            />
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Events;

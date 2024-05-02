import { getEvents } from "../../actions";
import { EventCard, EventCardSkeleton } from "./EventCard";
import { SearchBar } from "@/components/specific/search";

type Props = {
  search?: string;
};

export const EventCards = async ({ search }: Props) => {
  const events = await getEvents();

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <SearchBar className="mb-10 max-w-lg self-start w-full" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-10">
        {events.length === 0 && (
          <p>Sorry, no events available at the moment.</p>
        )}
        {events
          .filter((e) =>
            search ? e.title.toLowerCase().includes(search.toLowerCase()) : true
          )
          .map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </div>
    </div>
  );
};

export const EventCardsSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 w-full">
        {[...Array(10)].map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

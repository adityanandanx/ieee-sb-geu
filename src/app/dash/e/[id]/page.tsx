import { getEvent, getEvents } from "@/app/events/actions";
import { getEventGallery } from "@/app/gallery/actions";
import { NavSpacer } from "@/components/shared/nav";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

const EditEventPage = async ({ params }: { params: { id?: number } }) => {
  if (!params.id) notFound();
  const event = await getEvent(params.id);
  if (!event) notFound();
  const gallery = await getEventGallery(params.id);
  return (
    <>
      <NavSpacer />
      <main className="container">
        <pre className="text-ellipsis overflow-hidden">
          {JSON.stringify(event, null, 2)}
          {JSON.stringify(gallery, null, 2)}
        </pre>
      </main>
    </>
  );
};
export default EditEventPage;

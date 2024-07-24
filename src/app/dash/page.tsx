import { NavSpacer } from "@/components/shared/nav";
import { EventCards, EventCardsSkeleton } from "../events/_components";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getGalleryImageUrlFromName } from "../events/utils";
import { ImageIcon } from "lucide-react";
import Link from "next/link";

const Dashboard = async () => {
  const supabase = createClient();
  const { data: events, error } = await supabase.from("events").select();
  if (error) throw error;
  return (
    <>
      <NavSpacer />
      <main className="container">
        <div className="flex flex-wrap gap-4 justify-center">
          {events.map((ev) => (
            <Link
              key={ev.id}
              className="max-w-sm flex flex-row"
              href={`/dash/e/${ev.id}`}
            >
              <Card>
                {ev.cover_image_url ? (
                  <Image
                    width={128}
                    height={128}
                    // src={""}
                    src={getGalleryImageUrlFromName(ev.id, ev.cover_image_url)}
                    className="object-cover group-hover:scale-110 transition-transform h-auto w-32 aspect-square z-20"
                    alt={ev.title + "image"}
                  />
                ) : (
                  <ImageIcon className="-z-10 object-cover group-hover:scale-110 transition-transform" />
                )}
                <CardHeader className="flex-1">
                  <CardTitle className="">{ev.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;

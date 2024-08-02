drop policy "public read access" on "public"."events";

create policy "public read access"
on "public"."events"
as permissive
for select
to public
using ((published = true));




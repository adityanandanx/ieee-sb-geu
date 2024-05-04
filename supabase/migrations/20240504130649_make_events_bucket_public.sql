create policy "read access for anon 1lopzu_0"
on "storage"."objects"
as permissive
for select
to anon, authenticated
using ((bucket_id = 'event'::text));




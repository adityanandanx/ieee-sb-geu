drop policy "public read access" on "public"."events";

drop policy "crud for admin" on "public"."users";

create policy "admin crud"
on "public"."events"
as permissive
for all
to authenticated
using (( SELECT (get_user_role(auth.uid()) = 'ADMIN'::text)));


create policy "public read access"
on "public"."events"
as permissive
for select
to public
using (true);


create policy "crud for admin"
on "public"."users"
as permissive
for all
to public
using ((get_user_role(auth.uid()) = 'ADMIN'::text));




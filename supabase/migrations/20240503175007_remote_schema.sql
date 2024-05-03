alter type "public"."TeamType" rename to "TeamType__old_version_to_be_dropped";

create type "public"."TeamType" as enum ('faculty', 'core', 'tech');

alter table "public"."team" alter column teamtype type "public"."TeamType" using teamtype::text::"public"."TeamType";

drop type "public"."TeamType__old_version_to_be_dropped";



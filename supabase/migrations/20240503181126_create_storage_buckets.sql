insert into storage.buckets(id, name, public, file_size_limit, allowed_mime_types) values ('event', 'event', true, 20971520, '{"image/*"}') 
  on conflict(id) 
  do update set 
  name = 'event', file_size_limit = 20971520, allowed_mime_types = '{"image/*"}';
insert into storage.buckets(id, name, public, file_size_limit, allowed_mime_types) values ('team', 'team', true, 20971520, '{"image/*"}')
  on conflict(id) 
  do update set 
  name = 'team', file_size_limit = 20971520, allowed_mime_types = '{"image/*"}';

INSERT INTO public.events (id, created_at, title, registration_start, registration_end, event_start, event_end, venue, "desc", cover_image_url, published, tags)
VALUES (1, '2024-05-02 14:17:00.462239+00', 'Prompt Engineering and DevOps Workshop', NULL, NULL, '2024-05-04 05:30:00+00', '2024-05-04 07:30:00+00', 'CSIT Block, GEU', 'Hey there, workshop enthusiasts! 

Get ready to dive into the world of tech with not one, but TWO exciting workshops on May 4th, 2024!

PROMPT ENGINEERING
Ever wondered about crafting instructions for AI models? Join us as we explore the fascinating realm of prompt engineering, with an expert leading the way!

DEVELOPMENTAL OPERATIONS (DEVOPS)
Want to supercharge organizational efficiency? Learn top-notch strategies in DevOps to revolutionize operations within any company!', 'promptworkshop.jpg', true, '{}'::text[]);

-- Event 2
INSERT INTO public.events (id, created_at, title, registration_start, registration_end, event_start, event_end, venue, "desc", cover_image_url, published, tags)
VALUES (2, '2024-05-03 09:00:00+00', 'Data Science Bootcamp', '2024-05-10 09:00:00+00', '2024-05-15 17:00:00+00', '2024-05-20 09:00:00+00', '2024-05-25 17:00:00+00', 'Convention Center', 'Join us for an intensive five-day bootcamp covering all aspects of data science, from data wrangling to machine learning. No prior experience required!', 'datasciencebootcamp.jpg', true, '{}'::text[]);

-- Event 3
INSERT INTO public.events (id, created_at, title, registration_start, registration_end, event_start, event_end, venue, "desc", cover_image_url, published, tags)
VALUES (3, '2024-05-04 12:00:00+00', 'Digital Marketing Summit', '2024-05-05 12:00:00+00', '2024-05-10 12:00:00+00', '2024-05-15 09:00:00+00', '2024-05-15 17:00:00+00', 'Grand Hotel', 'Explore the latest trends and strategies in digital marketing at our summit. Network with industry leaders and gain insights to elevate your marketing game!', 'digitalmarketingsummit.jpg', true, '{}'::text[]);

-- Event 4
INSERT INTO public.events (id, created_at, title, registration_start, registration_end, event_start, event_end, venue, "desc", cover_image_url, published, tags)
VALUES (4, '2024-05-05 16:30:00+00', 'Artificial Intelligence Conference', '2024-05-10 09:00:00+00', '2024-05-15 17:00:00+00', '2024-05-20 09:00:00+00', '2024-05-25 17:00:00+00', 'Tech Hub', 'Join leading experts and innovators in AI for a comprehensive conference covering the latest advancements and applications in artificial intelligence.', 'aiconference.jpg', true, '{}'::text[]);

-- TEAM
-- Team member 1
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (1, '2024-05-03 16:45:58.826753+00', 'Aditya Nandan', 'volunteer', 'tech', 'adi.jpg');

-- Team member 2
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (2, '2024-05-03 17:08:08.188584+00', 'Harry Potter', 'head wizard', 'core', 'harry.webp');

-- Team member 3
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (3, '2024-05-03 17:08:28.859704+00', 'Ronald Weasly', 'assistant wizard', 'tech', NULL);

-- Team member 4
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (4, '2024-05-03 17:09:13.904164+00', 'Severus Snape', 'potions master', 'faculty', 'snape.webp');

-- Team member 5
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (5, '2024-05-03 17:10:24.089584+00', 'Albus Dumbledore', 'hogwarts headmaster', 'faculty', 'dumbledore.jpg');

-- Team member 6
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (6, '2024-05-03 17:20:00.000000+00', 'Hermione Granger', 'researcher', 'tech', 'hermione.jpg');

-- Team member 7
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (7, '2024-05-03 17:25:00.000000+00', 'Sirius Black', 'defence against dark arts professor', 'faculty', 'sirius.jpeg');

-- Team member 8
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (8, '2024-05-03 17:30:00.000000+00', 'Minerva McGonagall', 'transfiguration professor', 'faculty', 'mcgonagall.png');

-- Team member 9
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (9, '2024-05-03 17:35:00.000000+00', 'Draco Malfoy', 'slytherin prefect', 'core', 'draco.jpg');

-- Team member 10
INSERT INTO public.team (id, created_at, fullname, position, teamtype, avatar)
VALUES (10, '2024-05-03 17:40:00.000000+00', 'Luna Lovegood', 'quirky researcher', 'core', 'luna.jpg');
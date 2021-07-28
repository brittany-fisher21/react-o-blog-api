CREATE TABLE locations (
    id serial PRIMARY KEY,
    state_name text,
    location_name text,
    location_description text,
    location_image varchar(500),
    location_activities text
);
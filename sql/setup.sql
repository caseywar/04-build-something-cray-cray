DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_name TEXT NOT NULL,
    favorite_character TEXT NOT NULL,
    hair_color TEXT NOT NULL
    );
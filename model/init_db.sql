DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    names VARCHAR(100) NOT NULL,
    biography VARCHAR(500) NOT NULL,
    motive VARCHAR(500) NOT NULL
);
 INSERT INTO characters (names, biography, motive
 ) VALUES (
    "Holly",
    "Lives in London and has a pet dog",
    "The person stole her dog's favourite toy"
 );

 INSERT INTO characters (names, biography, motive
 ) VALUES (
    "Marina",
    "Lives in Wigan and wishes for Brazilian weather",
    "The person cast a spell to make the sky permanently grey"
 )



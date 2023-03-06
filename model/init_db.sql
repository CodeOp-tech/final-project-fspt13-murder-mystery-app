DROP TABLE IF EXISTS characters;

CREATE TABLE gameElements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cha BOOLEAN,
    names VARCHAR(100) NOT NULL,
    biography VARCHAR(500) NOT NULL,
    motive VARCHAR(500) NOT NULL,
    qu BOOLEAN,
    question VARCHAR(100),NOT NULL,
    answer VARCHER(300), NOT NULL
);
 INSERT INTO gameElements (character, names, biography, motive
 ) VALUES (
    
    "Holly",
    "Lives in London and has a pet dog",
    "The person stole her dog's favourite toy",
    "ffe",
    "45345"
 );

 INSERT INTO characters (names, biography, motive
 ) VALUES (
    "true"
    "Marina",
    "Lives in Wigan and wishes for Brazilian weather",
    "The person cast a spell to make the sky permanently grey",
    "hgfhgfhg",
    "hgfhgfhg"
 );



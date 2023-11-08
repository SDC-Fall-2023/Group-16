USE madEats;
CREATE TABLE foodLocation (
    id integer PRIMARY KEY AUTO_INCREMENT,
    locationName VARCHAR(255) NOT NULL,
    picture VARCHAR(255),
    stars FLOAT NOT NULL,
    numberOfReviews integer NOT NULL,
    physicalLocation VARCHAR(255)
);
ALTER TABLE foodLocation
MODIFY COLUMN stars FLOAT NOT NULL;
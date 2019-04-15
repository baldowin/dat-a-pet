USE datapet_db;

CREATE TABLE owners(
    ownerId INT NOT NULL AUTO_INCREMENT,
    ownerName VARCHAR (100),
    email VARCHAR (100),
    phone BIGINT,
    authorizedAgents VARCHAR(255),
    PRIMARY KEY(ownerId)
);

CREATE TABLE pets (
    petId INT AUTO_INCREMENT,
    petName VARCHAR(50) NOT NULL,
    imageURL VARCHAR(255),
    birthMonth INT NOT NULL,
    birthYear INT NOT NULL,
    petType VARCHAR(50) NOT NULL,
    petSubtype VARCHAR(50),
    gender VARCHAR(30) NOT NULL,
    neutered BOOLEAN NOT NULL DEFAULT true,
    ownerId INT NOT NULL,
    medicalHistory TEXT,
    PRIMARY KEY(petId),
    CONSTRAINT linkToOwners 
    FOREIGN KEY (ownerId) 
    REFERENCES owners (ownerId)
    on DELETE CASCADE
    on UPDATE CASCADE
);

CREATE TABLE petNotes (
    notes TEXT,
    petId INT NOT NULL,
    PRIMARY KEY(petId),
    CONSTRAINT linkToPets 
    FOREIGN KEY (petId) 
    REFERENCES pets (petId)
    on DELETE CASCADE
    on UPDATE CASCADE
)
USE datapet_db;

INSERT INTO owners 
(ownerName, ownerEmail, phone, authorizedAgents, createdAt, updatedAt) 
VALUES 
("Tucker", "again@email.com", 5558457909, "Dale", NOW(), NOW()),
("Jenny", "new@email.com", 5558675309, "Sharpie", NOW(), NOW());

INSERT INTO pets 
(petName, imageURL, birthMonth, birthYear, petType, petSubtype, gender, neutered, ownerOwnerId, medicalHistory, createdAt, updatedAt, immunizations)
VALUES 
("Evil"," ",06,66,"Dog", "Weiner", "A-gendered Demon", true, 1, "chronic possessions", NOW(), NOW(), "dogTEST"),
("Floyd"," ",01,18,"Cat","Cheshire","Male", false, 2,"suffers long boughts of disappearing", NOW(), NOW(), "catTEST");

INSERT INTO petNotes 
(notes, petPetId, createdAt, updatedAt)
VALUES
("little wanker bit me, and then smiled.. I swear he is actually Evil! <3 Johnie",3, NOW(), NOW());

INSERT INTO catImmunizations
(createdAt, updatedAt)
VALUES
(NOW(), NOW());

INSERT INTO dogImmunizations
(createdAt, updatedAt)
VALUES
(NOW(), NOW());
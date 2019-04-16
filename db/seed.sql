USE datapet_db;

INSERT INTO owners 
(ownerName, ownerEmail, phone, authorizedAgents, createdAt, updatedAt) 
VALUES 
("Tucker", "again@email.com", 5558457909, "Dale", NOW(), NOW()),
("Jenny", "new@email.com", 5558675309, "Sharpie", NOW(), NOW());

INSERT INTO pets 
(petName, imageURL, birthMonth, birthYear, petType, petSubtype, gender, neutered, ownerOwnerId, medicalHistory, createdAt, updatedAt)
VALUES 
("Evil"," ",06,66,"Dog", "Weiner", "A-gendered Demon", true, 1, "chronic possessions", NOW(), NOW()),
("Floyd"," ",01,18,"Cat","Cheshire","Male", false, 2,"suffers long boughts of disappearing", NOW(), NOW());

INSERT INTO petNotes 
(notes, petPetId, createdAt, updatedAt)
VALUES
("little wanker bit me, and then smiled.. I swear he is actually Evil! <3 Johnie",1, NOW(), NOW());
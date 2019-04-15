USE datapet_db;

INSERT INTO owners 
(ownerName, email, phone, authorizedAgents) 
VALUES 
("Tucker", "em@ai.l", 5558457909, "Dale"),
("Jenny", "e@mai.l", 5558675309, "Sharpie");

INSERT INTO pets 
(petName, imageURL, birthMonth, birthYear, petType, petSubtype, gender, neutered, ownerId, medicalHistory)
VALUES 
("Evil"," ",06,66,"Dog", "Weiner", "A-gendered Demon", true, 1, "chronic possessions"),
("Floyd"," ",01,18,"Cat","Cheshire","Male", false, 2,"suffers long boughts of disappearing");

INSERT INTO petNotes 
(notes, petId)
VALUES
("little wanker bit me, and then smiled.. I swear he is actually Evil! <3 Johnie",1)
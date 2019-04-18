$(document).ready(function() {
  // Getting references to our form and input
  var newPetForm = $("form.newPet");
  var petNameInput = $("input#petName-input");
  var imageURLInput = $("input#imageURL-input");
  var birthMonthInput = $("input#birthMonth-input");
  var birthYearInput = $("input#birthYear-input");
  var petTypeInput = $("input#petType-input");
  var genderInput = $("input#gender-input");
  var neuteredInput = $("input#birthMonth-input");
    
  newPetForm.on("submit", function(event) {
    event.preventDefault();
    var petData = {
      petName: petNameInput.val().trim(),
      imageURL: imageURLInput.val().trim(),
      birthMonth:birthMonthInput.val().trim(),
      birthYear:birthYearInput.val().trim(),
      petType:petTypeInput.val().trim(),
      gender:genderInput.val().trim(),
      neutered:neuteredInput.val().trim()
    };
    
    if (!petData.petName || !petData.petType || !petData.gender || !petData.birthMonth || !petData.birthYear) {
      return;
    }
    createPet(petData);
    petNameInput.val("");
    imageURLInput.val("");
    birthMonthInput.val("");
    birthYearInput.val("");
    petTypeInput.val("");
    genderInput.val("");
    neuteredInput.val("");
  });
    
  
  function createPet(object) {
    $.post("/api/pets", {
      petName: object.petName,
      imageURL: object.imageURL,
      birthMonth: object.birthMonth,
      birthYear: object.birthYear,
      petType: object.petType,
      gender: object.gender,
      neutered: object.neutered
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }
    
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
    
$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var nameInput = $("input#name-input");
  var phoneInput = $("input#phone-input");
  
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name:nameInput.val().trim(),
      phone:phoneInput.val().trim()
    };
  
    if (!userData.email || !userData.password || !userData.name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email,userData.name,userData.phone, userData.password);
    emailInput.val("");
    passwordInput.val("");
    nameInput.val("");
    phoneInput.val("");
  });
  
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email,name, phone, password) {
    $.post("/api/signup", {
      email: email,
      name: name,
      phone: phone,
      password: password
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
  
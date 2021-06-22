$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const loginBtn = $("#login");
  const emailInput = $("input#email-input");
  

  // When the form is submitted, we validate there's an email and password entered
  loginBtn.on("click", event => {
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      handleLoginErr({ message: 'Missing values for required fields' });
      return;
    }

    //call login
    loginUser(userData.email, userData.password);
  });

    //Redirect to Dashboard connect to DB
  function loginUser(email, password) {
    clearError();

    $.post("/api/auth/login", {
      email: email,
      password: password
    })
      .then(data => {
        console.log("loginUser", data);
        emailInput.val("");
        passwordInput.val("");
        window.location.replace("/dashboard");
        // If there's an error, log the error
      })
      .catch(err => {
        handleLoginErr(err.responseJSON)
      });
  }

  
  function handleLoginErr(err) {
    console.log('showing error: ', err);
    
  }

  
});

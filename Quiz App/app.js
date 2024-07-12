
var strtQuiz = document.getElementById("strtQuiz")
var personalContainer = document.getElementById("personalContainer")






function Submit(){
  var fnameInput = document.getElementById("fname");
  var lnameInput = document.getElementById("lname");
  var emailInput = document.getElementById("email");

  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var email = document.getElementById("email").value

  // Regex
  var firstNameRegex = /^[a-zA-Z]{3,16}$/;
  var lastNameRegex = /^[a-zA-Z]{3,16}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var checkemail = 0;
  var checkfname = 0;
  var checklname = 0;

  
  
  if(firstNameRegex.test(fname)){
    fnameInput.style.border = "2px solid green";
    fnameInput.style.color = "green";
    checkfname = 1;

  } else {
    fnameInput.style.border = "2px solid red";
    fnameInput.style.color = "red";
    checkfname = 0;
  }

  if(lastNameRegex.test(lname)){
    lnameInput.style.border = "2px solid green";
    lnameInput.style.color = "green";
    checklname = 1;
  } else {
    lnameInput.style.border = "2px solid red";
    lnameInput.style.color = "red";
    checklname = 0;
  }

  if(emailRegex.test(email)){
    emailInput.style.border = "2px solid green";
    emailInput.style.color = "green";
    checkemail = 1;
  } else {
    emailInput.style.border = "2px solid red";
    emailInput.style.color = "red";
    checkemail = 0;
  }

  if( checkfname === 1 && checklname === 1 && checkemail === 1 ){
    localStorage.setItem("fname" , fname)
    localStorage.setItem("lname" , lname)
    localStorage.setItem("email" , email)

    var mainDetails = document.getElementById("main-details");
    mainDetails.className = "hid";
    mainDetails.remove();

    // strtQuiz.className = "show-startquiz";
    strtQuiz.className = "strtQuiz";
    
  } else {
    console.log("Kuch toh garbar hai daaya!")
  }
    
} 




var strtQuiz = document.getElementById("strtQuiz")
var personalContainer = document.getElementById("personalContainer")






function Submit(){
  var fnameInput = document.getElementById("fname")

  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var email = document.getElementById("email").value

  // Regex
  var firstNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  var lastNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var checkemail = 0;
  var checkfname = 0;
  var checklname = 0;

  
  
  if(firstNameRegex.test(fname)){
    console.log("chal gya fname")
    checkfname = 1;

  } else {
    console.log("nhi chala fname")
    fnameInput.style.border = "1px solid red";
    checkfname = 0;
  }

  if(lastNameRegex.test(lname)){
    console.log("chal gya lname")
    checklname = 1;
  } else {
    console.log("nhi chala lname")
    checklname = 0;
  }

  if(emailRegex.test(email)){
    console.log("chal gya email")
    checkemail = 1;
  } else {
    console.log("nhi chala email")
    checkemail = 0;
  }

  if( checkfname === 1 && checklname === 1 && checkemail === 1 ){
    console.log("All works fine");
    localStorage.setItem("fname" , fname.value)
    localStorage.setItem("lname" , lname.value)
    localStorage.setItem("email" , email.value)
    personalContainer.className = "hid"
    strtQuiz.className = "show"
  } else {
    console.log("somethings wrong")
  }
    
} 


